import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gradebook',
  templateUrl: './gradebook.component.html',
  styleUrls: ['./gradebook.component.css']
})
export class GradebookComponent implements OnInit {

  //Gradebook
  student = "";
  subject = "";
  prelims = 0;
  midterms = 0;
  finals = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
