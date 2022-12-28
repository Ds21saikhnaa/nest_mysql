import { Test, TestingModule } from '@nestjs/testing';
import { QwertController } from './qwert.controller';

describe('QwertController', () => {
  let controller: QwertController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QwertController],
    }).compile();

    controller = module.get<QwertController>(QwertController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
