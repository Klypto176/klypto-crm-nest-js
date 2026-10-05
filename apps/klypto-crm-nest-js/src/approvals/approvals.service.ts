import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ApprovalActionDto } from './dto/approval.dto';

@Injectable()
export class ApprovalsService {
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

  async findPending(organizationId: string) {
    const [leaves, finances] = await Promise.all([
      this.prisma.leaveRequest.findMany({
        where: { organizationId, status: 'Pending' },
        include: { employee: { select: { name: true } } },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.financialTransaction.findMany({
        where: {
          organizationId,
          status: { in: ['Pending', 'Draft'] },
        },
        include: { partner: { select: { name: true } } },
        orderBy: { date: 'desc' },
      }),
    ]);

    // Transform into a unified "Approval" format
    const unified = [
      ...leaves.map((l) => ({
        id: l.id,
        type: 'LEAVE',
        title: `${l.type} Leave Request`,
        requester: l.employee?.name || 'Unknown',
        amount: null,
        date: l.createdAt,
        priority: 'Medium',
        description: `${l.reason || 'No reason provided'}. (From ${new Date(l.startDate).toLocaleDateString()} to ${new Date(l.endDate).toLocaleDateString()})`,
        metadata: { startDate: l.startDate, endDate: l.endDate },
      })),
      ...finances.map((f) => ({
        id: f.id,
        type: 'FINANCE',
        title: f.type === 'PURCHASE_ORDER' ? 'Purchase Order' : 'Sales Invoice',
        requester: f.partner?.name || 'Unknown',
        amount: `₹${f.amount.toLocaleString('en-IN')}`,
        date: f.date,
        priority: f.amount > 5000 ? 'High' : 'Medium',
        description: `Reference: ${f.referenceNumber}. Transaction amount: ₹${f.amount.toLocaleString('en-IN')}.`,
        metadata: { reference: f.referenceNumber },
      })),
    ];

    return unified.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  }

  async processAction(organizationId: string, dto: ApprovalActionDto) {
    const { type, id, action } = dto;
    const status =
      action === 'APPROVE'
        ? type === 'FINANCE'
          ? 'Approved'
          : 'Approved'
        : 'Rejected';

    if (type === 'LEAVE') {
      const record = await this.prisma.leaveRequest.findFirst({
        where: { id, organizationId },
      });
      if (!record) throw new NotFoundException('Leave request not found');
      return this.prisma.leaveRequest.update({
        where: { id },
        data: { status },
      });
    }

    if (type === 'FINANCE') {
      const record = await this.prisma.financialTransaction.findFirst({
        where: { id, organizationId },
      });
      if (!record)
        throw new NotFoundException('Financial transaction not found');
      return this.prisma.financialTransaction.update({
        where: { id },
        data: { status },
      });
    }

    throw new BadRequestException('Invalid approval type');
  }
}
