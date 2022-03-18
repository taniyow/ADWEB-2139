import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emplist2',
  templateUrl: './emplist2.component.html',
  styleUrls: ['./emplist2.component.css']
})
export class Emplist2Component implements OnInit {

  EmpList: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.EmpList = this.service.empList();
  }

}
