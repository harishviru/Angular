import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-contact',
  template: `
    <p> Department-contact works!</p>
  `,
  styles: [
    `p{text-align:center;color:green;font-weight:bold;font-size:25px;}`
  ]
})
export class DepartmentContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
