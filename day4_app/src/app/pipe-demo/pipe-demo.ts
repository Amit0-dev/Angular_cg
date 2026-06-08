import { Component } from '@angular/core';
import {
  DatePipe,
  CurrencyPipe,
  TitleCasePipe,
  UpperCasePipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  JsonPipe,
} from '@angular/common';

@Component({
  selector: 'app-pipe-demo',
  imports: [
    DatePipe,
    CurrencyPipe,
    TitleCasePipe,
    UpperCasePipe,
    LowerCasePipe,
    PercentPipe,
    SlicePipe,
    JsonPipe,
  ],
  templateUrl: './pipe-demo.html',
  styleUrl: './pipe-demo.css',
})
export class PipeDemo {
  todayDate: Date = new Date();
  productPrice: number = 45678.99;
  productName: string = 'wireless noise cancelling headphones pro max';
  discount: number = 0.1875;
  orderItems: string[] = ['Phone', 'Charger', 'Case', 'Screen Guard', 'Earbuds', 'Stand'];
  stockData: { name: string; price: number; change: number } = {
    name: 'TechCorp Ltd',
    price: 1234.5,
    change: 0.0312,
  };
}
