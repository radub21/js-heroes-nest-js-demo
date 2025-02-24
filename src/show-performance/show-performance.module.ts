import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ShowPerformanceController } from './show-performance.controller';
import { ShowPerformanceService } from './show-performance.service';

@Module({
  controllers: [ShowPerformanceController],
  providers: [ShowPerformanceService, PrismaService],
})
export class ShowPerformanceModule {}
