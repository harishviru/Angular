import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <p> Page Not found....!</p>
  `,
  styles: [
    `p{text-align:center;color:red;font-weight:bold;font-size:25px;margin-top: 300px;position: absolute;top: -200px;left: 450px;}`
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
