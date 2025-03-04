import { Test, TestingModule } from '@nestjs/testing';
import { StorageProductionService } from './storage-production.service';

describe('StorageProductionService', () => {
  let service: StorageProductionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StorageProductionService],
    }).compile();

    service = module.get<StorageProductionService>(StorageProductionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
