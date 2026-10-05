import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AttendanceService } from '../attendance/attendance.service';

@Injectable()
export class BiometricService {
  private readonly logger = new Logger(BiometricService.name);

  constructor(
    private prisma: PrismaService,
    private attendanceService: AttendanceService,
  ) {}

  async processIncomingData(deviceSn: string, table: string, rawData: string) {
    if (table !== 'ATTLOG') {
      this.logger.log(
        `Received non-ATTLOG data for table: ${table}. Skipping processing.`,
      );
      return 'OK';
    }

    const lines = rawData.trim().split(/\r?\n/);
    this.logger.log(
      `Processing ${lines.length} log entries from device ${deviceSn}`,
    );

    for (const line of lines) {
      if (!line.trim()) continue;

      const [userId, timestampStr, status] = line.split('\t');

      // SKIP OLD RECORDS: the device re-sends its full history on every handshake,
      // so only punches on or after the sync start date (device local time) count.
      const syncFromDate = process.env.BIOMETRIC_SYNC_FROM || '2026-10-05';
      if (timestampStr && timestampStr < syncFromDate) {
        continue;
      }

      try {
        // ZKTeco machine sends timestamps in its local time (IST).
        const punchTime = new Date(timestampStr.replace(' ', 'T') + '+05:30');

        // Check for existing log to prevent duplicates
        const existingLog = await this.prisma.biometricLog.findFirst({
          where: { empCode: userId, punchTime },
        });

        if (existingLog) {
          continue; // Move to next line immediately to save time
        }

        // Save raw log
        await this.prisma.biometricLog.create({
          data: {
            deviceSn,
            empCode: userId,
            punchTime,
            punchType: status,
            rawLog: line,
          },
        });

        // Find employee by code
        const employee = await this.prisma.employee.findUnique({
          where: { code: userId },
        });

        if (!employee) {
          continue;
        }

        // Create/Update attendance record
        const attendanceDto = {
          employeeId: employee.id,
          date: punchTime.toISOString().split('T')[0],
          status: 'Present',
          checkIn: punchTime.toISOString(),
          checkOut: punchTime.toISOString(),
        };

        await this.attendanceService.create(
          employee.organizationId,
          attendanceDto,
        );

        this.logger.log(
          `Processed attendance for ${employee.name} (${userId}) at ${timestampStr}`,
        );
      } catch (error) {
        const stack = error instanceof Error ? error.stack : undefined;
        this.logger.error(`Error processing line: ${line}`, stack);
      }
    }

    return 'OK';
  }

  getRequests(deviceSn: string) {
    this.logger.log(`Command poll from device ${deviceSn}`);
    return 'OK';
  }
}
