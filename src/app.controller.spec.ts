import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "result": true, "total": 1000, "amount": 100', () => {
      const query = {
        bill: 1000,
        people: 1,
        tipPercent: 10,
      };
      const result = JSON.stringify({
        result: true,
        total: 1100,
        amount: 100,
      });
      expect(appController.getResult(query)).toBe(result);
    });
  });
});
