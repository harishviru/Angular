import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details2',
  template: `
    <p>Employee-details 2 works...!</p>
      
    <table style="border:1px solid green;">
    <tr>
       <th>Id</th>
       <th>Name</th>
       <th>Email</th>
       <th>Gender</th>
     </tr>
       <tbody>
       <tr *ngFor="let emp of employees">
            <td>{{emp.id +'.'}}</td> 
            <td> {{emp.first_name}} {{emp.last_name}}</td>
             <td>{{emp.email}}</td> 
             <td>{{emp.gender}}</td>
        </tr>
       </tbody>
    </table>
    

  `,
  styles: [
    `p{text-align:center;color:red;font-weight:bold;font-size:25px;}`,
    `div{
      text-align:center;color:blue;font-weight:bold;font-size:25px;
    }`,
    `table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 50%;
      margin-left:350px;
    }`
    ,`td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    `,
    `tr:nth-child(even) {
      background-color: #dddddd;
    }`
  ]
})
export class EmployeeDetails2Component implements OnInit {

  employees=[] as any;

  constructor(private _empServices:EmployeeService) { }
  ngOnInit(): void {
    this.employees=this._empServices.getEmployees();
  }

}
