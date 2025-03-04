import { Test, TestingModule } from '@nestjs/testing';
import { ComedianService } from './comedian.service';

describe('ComedianService', () => {
  let service: ComedianService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ComedianService],
    }).compile();

    service = module.get<ComedianService>(ComedianService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
