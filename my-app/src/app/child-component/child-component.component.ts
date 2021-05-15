import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component',
  template: `
    <p>ChildComponent works! </p>
    <div> {{fromData}}</div>
     <br>
    <p [style.text-align]="'center'">Sending ChildComponent to Parent <p>
    <button (click)="fireEvent()">SendChildInfoToParent</button>
  `,
  styles: [
    'div{text-align:center;}','div{color:green}',`div{font-size:30px;}`,`button{margin-left: 650px;}`
  ]
})
export class ChildComponentComponent implements OnInit {

// @Input() fromParent="";
@Input('fromParent') fromData="";    //From Parent(AppComponent) to Child(ChildComponentComponent) By Using @Input

@Output() childInfoToParent:EventEmitter<string>=new EventEmitter<string>();

fireEvent(){
   this.childInfoToParent.emit("From Child Info to parent Component")
 }


  constructor() { }
  ngOnInit(): void {}

}
 