import { DynamicModule, Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StorageLocalService } from './storage-local/storage-local.service';
import { StorageProductionService } from './storage-production/storage-production.service';

export const STORAGE_PROVIDER = 'storage-provider';

@Global()
@Module({})
export class StorageModule {
  static forRoot(): DynamicModule {
    return {
      module: StorageModule,
      imports: [ConfigModule],
      providers: [
        {
          provide: STORAGE_PROVIDER,
          useFactory: (configService: ConfigService) => {
            const NODE_ENV = configService.get<string | undefined>('NODE_ENV');

            if (NODE_ENV === 'production')
              return new StorageProductionService();
            return new StorageLocalService();
          },
          inject: [ConfigService],
        },
      ],
      exports: [STORAGE_PROVIDER],
    };
  }
}
