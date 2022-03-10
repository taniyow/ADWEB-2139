import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  //Invoke HttpClient as Dependency Injection
  constructor(private http:HttpClient) { }

  getUsersfromServer() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}