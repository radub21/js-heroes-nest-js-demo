import { Test, TestingModule } from '@nestjs/testing';
import { ShowPerformanceController } from './show-performance.controller';
import { ShowPerformanceService } from './show-performance.service';

describe('ShowPerformanceController', () => {
  let controller: ShowPerformanceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowPerformanceController],
      providers: [ShowPerformanceService],
    }).compile();

    controller = module.get<ShowPerformanceController>(
      ShowPerformanceController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
