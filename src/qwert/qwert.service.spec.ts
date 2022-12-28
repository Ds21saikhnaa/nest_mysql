import { Test, TestingModule } from '@nestjs/testing';
import { QwertService } from './qwert.service';

describe('QwertService', () => {
  let service: QwertService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QwertService],
    }).compile();

    service = module.get<QwertService>(QwertService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
