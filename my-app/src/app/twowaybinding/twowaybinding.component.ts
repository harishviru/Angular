import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  template: `
    <p>TwoWayDatabinding works!</p>
    <input type="text" name="value" [(ngModel)]="name" >
    <p [style.text-align]="'center'">You enter value ::{{name}}   </p>
    
  `,
  styles: [
    `input{margin-left: 650px;}`
  ]
})
export class TwowaybindingComponent implements OnInit {

  public name="";
  constructor() { }
  ngOnInit(): void {}

}
