import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { ComedianController } from './comedian.controller';
import { ComedianService } from './comedian.service';

@Module({
  controllers: [ComedianController],
  providers: [ComedianService, PrismaService, ConfigService],
})
export class ComedianModule {}
