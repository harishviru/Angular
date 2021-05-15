import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-overview',
  template: `
    <p>Department-overview works! </p>
  `,
  styles: [
    `p{text-align:center;color:green;font-weight:bold;font-size:25px;}`
  ]
})
export class DepartmentOverviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
