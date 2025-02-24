import { Test, TestingModule } from '@nestjs/testing';
import { ShowPerformanceService } from './show-performance.service';

describe('ShowPerformanceService', () => {
  let service: ShowPerformanceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowPerformanceService],
    }).compile();

    service = module.get<ShowPerformanceService>(ShowPerformanceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
