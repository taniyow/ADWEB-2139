import { Component, OnInit } from '@angular/core';

// Import essential rxjs tools for async
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  presentDate = new Date();

  // Set Async Pipe for Date()
  time = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

  // Currency Pipe
  price: number = 20000;

  // Slice Pipe
  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];
  
  // Decimal Pipe
  decimalNum1: number = 9.7589623;
  decimalNum2: number = 5.43;

  // Percent Pipe
  num1: number = 0.259;
  num2: number = 1.3495;

  constructor() { }

  ngOnInit(): void {
  }

}
