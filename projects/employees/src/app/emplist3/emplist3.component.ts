import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emplist3',
  templateUrl: './emplist3.component.html',
  styleUrls: ['./emplist3.component.css']
})
export class Emplist3Component implements OnInit {

  EmpList: any;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.EmpList = this.service.empList();
  }

}
