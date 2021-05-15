import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list2',
  template: `
    <p> Employee-list 2 works!  </p>
     <div *ngFor="let emp of employees">
           {{emp.id}} {{emp.first_name}} {{emp.last_name}}
     </div>
  `,
  styles: [
    `p{text-align:center;color:red;font-weight:bold;font-size:25px;}`,
    `div{
      text-align:center;color:blue;font-weight:bold;font-size:25px;
    }`
  ]
})
export class EmployeeList2Component implements OnInit {

  public employees=[] as any;

  constructor(private _empServices:EmployeeService) { }

  ngOnInit(): void {
    this.employees=this._empServices.getEmployees();
  }
}
