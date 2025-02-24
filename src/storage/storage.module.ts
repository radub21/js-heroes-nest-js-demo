import { Module } from '@nestjs/common';
import { StorageLocalService } from './storage-local/storage-local.service';
import { StorageProductionService } from './storage-production/storage-production.service';

@Module({
  providers: [StorageLocalService, StorageProductionService],
})
export class StorageModule {}
