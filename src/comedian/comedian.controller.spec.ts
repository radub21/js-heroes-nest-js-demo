import { Test, TestingModule } from '@nestjs/testing';
import { ComedianController } from './comedian.controller';

describe('ComedianController', () => {
  let controller: ComedianController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ComedianController],
    }).compile();

    controller = module.get<ComedianController>(ComedianController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
