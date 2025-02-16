import { Injectable } from '@nestjs/common';

@Injectable()
export class MonitoringService {
  public hereAreSomeLogs() {
    return 'Here are some logs';
  }
}
