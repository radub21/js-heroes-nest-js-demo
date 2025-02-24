import { Test, TestingModule } from '@nestjs/testing';
import { StorageLocalService } from './storage-local.service';

describe('StorageLocalService', () => {
  let service: StorageLocalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageLocalService],
    }).compile();

    service = module.get<StorageLocalService>(StorageLocalService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
