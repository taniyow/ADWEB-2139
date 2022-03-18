import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-emplist1',
  templateUrl: './emplist1.component.html',
  styleUrls: ['./emplist1.component.css']
})
export class Emplist1Component implements OnInit {

  EmpList: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.EmpList = this.service.empList();
  }

}
