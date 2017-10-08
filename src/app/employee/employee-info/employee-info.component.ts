import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  firstName: string;
  lastName: string;
  position: string;

  constructor() {
    this.firstName = 'Tyrion';
    this.lastName = 'Lannister';
    this.position = 'Hand of the Queen';
  }

  getEmployeeName(){
    return this.firstName + ' ' + this.lastName;
  }

  ngOnInit() {
  }

}
