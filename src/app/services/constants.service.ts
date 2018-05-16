import { Injectable } from '@angular/core';

@Injectable()
export class Constants {

  constructor() { }

  orderMethods = {
    "order": 'order',
    "picking": 'selfPicking'
  }
}
