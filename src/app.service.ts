import { Injectable } from '@nestjs/common';
import { QueryResult } from './interfaces/QueryResult.interface';

@Injectable()
export class AppService {
  getResult(query: QueryResult) {
    return CalResult(query);
  }
}

const CalResult = (query: QueryResult) => {
  let { bill, tipPercent, people } = query;

  bill = Number(bill);
  tipPercent = Number(tipPercent);
  people = Number(people);

  const calTotal = function () {
    let resultTotal = 0;
    resultTotal = (bill * (tipPercent / 100) + bill) / people;
    return resultTotal;
  };
  const calAmount = function () {
    let resultAmount = 0;
    resultAmount = (bill * (tipPercent / 100)) / people;
    return resultAmount;
  };
  let result = {
    result: false,
    total: 0,
    amount: 0,
  };

  if (bill && !isNaN(tipPercent) && people) {
    result = {
      result: true,
      total: calTotal(),
      amount: calAmount(),
    };
  }

  return JSON.stringify(result);
};
