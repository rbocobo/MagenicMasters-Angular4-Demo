import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  employeeId: number;
  firstName: string;
  lastName: string;
  position: string;
  idpath: string;
  showIdBorder: boolean;
  highlightTitle: boolean;
  isItalic: boolean;
  isDecorated: boolean;

  constructor() {
    this.employeeId = 1500;
    this.firstName = 'Tyrion';
    this.lastName = 'Lannister';
    this.position = 'Hand of the Queen';
    this.idpath = '../assets/images/tyrion-id.jpg';
    this.showIdBorder = true;
    this.highlightTitle = true;
    this.isItalic = true;
    this.isDecorated = true;
  }

  getEmployeeName(){
    return this.firstName + ' ' + this.lastName;
  }

  ngOnInit() {
  }

  setTitleClass(){
    let titleClass = {
      'highlight-title' : this.highlightTitle
    }
    return titleClass;
  }

  setStyle(){
    let styles = {
      'font-style' : this.isItalic ? 'italic' : 'normal',
      'text-decoration' : this.isDecorated ? 'underline' : 'none'
    }

    return styles;
  }
}
