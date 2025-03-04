import { Test, TestingModule } from '@nestjs/testing';
import { ComedianController } from './comedian.controller';
import { ComedianService } from './comedian.service';

describe('ComedianController', () => {
  let controller: ComedianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComedianController],
      providers: [ComedianService],
    }).compile();

    controller = module.get<ComedianController>(ComedianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
