import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  template: `
    <p> Employee-list Component Here .........! </p>
  `,
  styles: [
    `p{text-align:center;color:green;font-weight:bold;font-size:25px;margin-top: 300px;position: absolute;top: -200px;left: 450px;}`
  ]
})
export class EmployeeListComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
}
