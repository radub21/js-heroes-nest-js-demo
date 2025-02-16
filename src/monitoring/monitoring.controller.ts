import { Controller, Get } from '@nestjs/common';
import { MonitoringService } from './monitoring.service';

@Controller('monitoring')
export class MonitoringController {
  constructor(private readonly monitoringService: MonitoringService) {}

  @Get('logs')
  getMonitoringLogs() {
    return this.monitoringService.hereAreSomeLogs();
  }
}
