import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-properybinding',
  template: `
    <p>
        Properybinding works!
    </p>
    <br>
    <input type="text" name="name" [id]="courseId" value="{{ngValue}}"  [disabled]="isDisabled"/>
    <br> <br>
    <input type="text" name="name" [id]="courseId" [value]="ngValue" disabled="{{isDisabled}}"/> <!---Interplotation works for String data--->
    <br><br>
    <input type="text" name="name" [id]="courseId" [value]="ngValue"  [disabled]="isDisabled"/>
    `,
  styles: [
  ]
})
export class ProperybindingComponent implements OnInit {


  courseId:string="cId"
  ngValue :string ="Angular Framework"
  isDisabled=false;

  constructor() { }

  ngOnInit(): void {
  }

}
