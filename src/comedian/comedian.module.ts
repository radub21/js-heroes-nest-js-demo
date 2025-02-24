import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { StorageLocalService } from '../storage/storage-local/storage-local.service';
import { StorageProductionService } from '../storage/storage-production/storage-production.service';
import { ComedianController } from './comedian.controller';
import { ComedianService } from './comedian.service';

@Module({
  controllers: [ComedianController],
  providers: [
    ComedianService,
    PrismaService,
    StorageLocalService,
    StorageProductionService,
    ConfigService,
  ],
})
export class ComedianModule {}
