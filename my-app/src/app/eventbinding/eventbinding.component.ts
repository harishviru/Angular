import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  template: `
    <p>EventBinding works!</p>
     <button (click)="onClick()">Click Me By  :()</button>
     <button on-click="onClick()">Click Me By :on-targetEvent</button>
      <p [style.text-align]="'center'">{{greeting}}</p>
     <button (click)=" greeting='Inline click Here'">Click Me </button>

     <button (click)="clickMe()">Increment {{count}}</button>
     <br>
     <input (input)="handleInput($event)" placeholder="Enter value">
     <p [style.text-align]="'center'">You have entered {{value}}</p>
     <br>
     <input #ipt type="text" placeholder="Enter value"><button [style.margin-left]="'0px'" (click)="clickHandler(ipt.value)" >Show Value</button>
     <p [style.text-align]="'center'">You have entered  we  are showing By Using templare  Ref variable :: {{tempRefVal}} </p>
     
     <input (keyup)="value1= $any($event.target).value" placeholder="Enter value1"/>
     <p [style.text-align]="'center'">You have entered value1 is ::{{value1}}   </p>
     <br>
     <input (keyup.enter)="value2=$any($event.target).value" (keyup.escape)="$any($event.target).value='';value2=''">
     <p [style.text-align]="'center'">(Enter & Escape)You have entered value2 is ::{{value2}}   </p>
  `,
  styles: [
    `button{margin-left: 650px;}`,`input{margin-left: 650px;}`
  ],
})
export class EventbindingComponent implements OnInit {


  public greeting:string="";
  public value:string="";
  public count:number=0;
  public tempRefVal="";
      value1:string="";
      value2="";

  onClick(){
    this.greeting="Welcome to event binding"
  }
  clickMe(){
    this.count++;
  }
  handleInput(event:any){
    this.value=event.target.value;
    //console.log(event.target.value)
  }
  clickHandler(msgValue:string){
     this.tempRefVal=msgValue;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
