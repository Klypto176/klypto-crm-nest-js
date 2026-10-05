import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CrmOverviewService {
  constructor(private prisma: PrismaService) {}

  async getOrganizationId(userId: string): Promise<string> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { organizationId: true },
    });
    if (!user || !user.organizationId) {
      throw new UnauthorizedException('Invalid user context');
    }
    return user.organizationId;
  }

  async getStats(organizationId: string) {
    const [totalLeads, activeDeals, totalValue, wonLeads] = await Promise.all([
      this.prisma.lead.count({ where: { organizationId } }),
      this.prisma.lead.count({
        where: {
          organizationId,
          status: { in: ['Discovery', 'Proposal', 'Negotiation'] },
        },
      }),
      this.prisma.lead.aggregate({
        where: { organizationId },
        _sum: { value: true },
      }),
      this.prisma.lead.count({ where: { organizationId, status: 'Won' } }),
    ]);

    const conversionRate = totalLeads > 0 ? (wonLeads / totalLeads) * 100 : 0;

    return {
      totalLeads,
      activeDeals,
      totalRevenue: `₹${(totalValue._sum.value || 0).toLocaleString('en-IN')}`,
      conversionRate: `${conversionRate.toFixed(1)}%`,
    };
  }

  async getRecentLeads(organizationId: string) {
    return this.prisma.lead.findMany({
      where: { organizationId },
      orderBy: { createdAt: 'desc' },
      take: 5,
      select: {
        id: true,
        name: true,
        company: true,
        value: true,
        status: true,
        createdAt: true,
      },
    });
  }
}
