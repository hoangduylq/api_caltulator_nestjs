import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryResult } from './interfaces/QueryResult.interface';

@Controller('calculator')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getResult(@Query() query: QueryResult) {
    return this.appService.getResult(query);
  }
}
