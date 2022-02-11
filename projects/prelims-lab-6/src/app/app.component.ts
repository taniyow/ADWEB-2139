import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //ngIf
  logInName = 'admin';

  //ngIfElse
  isLogIn:boolean = false;
  isLogOut:boolean = true;

  //ngFor
  studentArr: any[] = [
    { "id": 1 ,  "name":"Mark" },
    { "id": 2 , "name":"Christian" },
    { "id": 3 , "name":"Xian" },
    { "id": 4 , "name":"Tan" }
  ];

  trackByData(index:number, studentArr:any): number {
    return studentArr.id;
  }

  //ngSwitch
  employee = [
    { 
      firstname: "Mark", 
      lastname: "Tan", 
      email: "mmtan@student.hau.edu.ph", 
      role: "DEVELOPER"
    },
    { 
      firstname: "Juan", 
      lastname: "Dela Cruz", 
      email: "juandelacruz@gmail.com", 
      role: "SEO"
    },
    { firstname: "Lorem", 
      lastname: "Ipsum", 
      email: "loremipsum@gmail.com", 
      role: "MANAGER"
    }
  ];

}
