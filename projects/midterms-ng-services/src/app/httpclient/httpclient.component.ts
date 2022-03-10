import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../httpclient.service';

@Component({
  selector: 'app-httpclient',
  templateUrl: './httpclient.component.html',
  styleUrls: ['./httpclient.component.css']
})
export class HttpclientComponent implements OnInit {
  pageTitle: string = "Example HTTP Service";

  httpusers: any;

  constructor(private httpclientList:HttpclientService) { }

  ngOnInit(): void {
    //getUsersfromServer is an observable, subscribe to it using the code below
    this.httpclientList.getUsersfromServer().subscribe((data)=>{
    this.httpusers = data;
    });
  }
}