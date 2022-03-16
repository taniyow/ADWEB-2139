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

  price: number = 20000;

  constructor() { }

  ngOnInit(): void {
  }

}
