import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StorageLocalService } from './storage-local/storage-local.service';
import { StorageProductionService } from './storage-production/storage-production.service';

export const STORAGE_SERVICE = 'STORAGE_SERVICE';

@Global()
@Module({})
export class StorageModule {
  static forRoot() {
    return {
      module: StorageModule,
      imports: [ConfigModule],
      providers: [
        {
          provide: STORAGE_SERVICE,
          useFactory: (configService: ConfigService<NodeJS.ProcessEnv>) => {
            const nodeEnv =
              configService.get<NodeJS.ProcessEnv['NODE_ENV']>('NODE_ENV');

            if (!nodeEnv) {
              throw new Error('NODE_ENV is not set');
            }

            return nodeEnv === 'production'
              ? new StorageProductionService()
              : new StorageLocalService();
          },
          inject: [ConfigService],
        },
        ConfigService,
        StorageLocalService,
        StorageProductionService,
      ],
      exports: [STORAGE_SERVICE],
    };
  }
}
