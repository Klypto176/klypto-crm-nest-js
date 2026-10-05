import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Header,
  Req,
  Logger,
  RawBodyRequest,
} from '@nestjs/common';
import { BiometricService } from './biometric.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import type { Request } from 'express';

@ApiTags('Biometric')
@Controller('iclock')
export class BiometricController {
  private readonly logger = new Logger(BiometricController.name);

  constructor(private readonly biometricService: BiometricService) {}

  @Get(['cdata', 'cdata.aspx', 'cdata.php', 'cdata.dll'])
  @Header('Content-Type', 'text/plain')
  @ApiOperation({ summary: 'ADMS Options Handshake' })
  handshake(@Query() query: any, @Query('SN') sn: string) {
    this.logger.log(
      `HANDSHAKE DETECTED! Query params: ${JSON.stringify(query)}`,
    );
    // TransInterval (minutes): the device batches punches and uploads them once per hour.
    return `GET OPTION FROM: ${sn}\r\nStamp=0\r\nOpStamp=0\r\nErrorDelay=300\r\nDelay=60\r\nTransTimes=00:00;23:59\r\nTransInterval=60\r\nTransFlag=1111000000\r\nRealtime=0\r\nEncrypt=0`;
  }

  @Post(['cdata', 'cdata.aspx', 'cdata.php', 'cdata.dll'])
  @Header('Content-Type', 'text/plain')
  @ApiOperation({ summary: 'Receive Biometric Data (ATTLOG)' })
  async receiveData(
    @Query('SN') sn: string,
    @Query('table') table: string,
    @Req() req: Request,
  ) {
    let rawData = '';
    req.setEncoding('utf8');
    for await (const chunk of req) {
      rawData += chunk;
    }
    this.logger.log(
      `DATA PUSH DETECTED! SN: ${sn}, Table: ${table}, Body size: ${rawData.length} bytes`,
    );
    this.logger.log(`Raw Body Preview: ${rawData.substring(0, 100)}`);
    return this.biometricService.processIncomingData(sn, table, rawData);
  }

  @Get(['getrequest', 'getrequest.aspx', 'getrequest.php', 'getrequest.dll'])
  @ApiOperation({ summary: 'Command Polling' })
  getRequests(@Query('SN') sn: string) {
    return this.biometricService.getRequests(sn);
  }

  @Post('devicecmd')
  @ApiOperation({ summary: 'Device Command Response' })
  deviceCmd(@Query('SN') sn: string, @Body() body: any) {
    this.logger.log(
      `Received command result from ${sn}: ${JSON.stringify(body)}`,
    );
    return 'OK';
  }
}
