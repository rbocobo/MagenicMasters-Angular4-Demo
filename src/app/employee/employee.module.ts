import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[EmployeeInfoComponent],
  declarations: [EmployeeInfoComponent]
})
export class EmployeeModule { }
