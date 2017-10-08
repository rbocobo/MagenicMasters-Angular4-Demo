import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[EmployeeInfoComponent],
  declarations: [EmployeeInfoComponent]
})
export class EmployeeModule { }
