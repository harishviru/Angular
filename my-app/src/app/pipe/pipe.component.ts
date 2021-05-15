import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
              <p> Pipe Works! </p>
              <p> #01. String transformation [uppercase,lowercase,titlecase]</p>    
              <div>{{'Orignal Str :  '+strData}}</div>
              <div>{{strData | uppercase }}</div>
              <div>{{strData | lowercase }}</div>
              <div>{{strData | titlecase }}</div>
              <br>

              <p> #02. NumberPipe</p>    
              <div>{{'Original Number :'+salary}}</div>
              <div>{{salary | number}}</div>
              <div>{{salary | number:'7.1-5'}}</div>
              <div>{{salary | number:'3.1-2'}}</div>
              <br>

              <p> #03. SlicePipe</p> 
              <div>{{'Original String :'+welcomeMsg}}</div>
              <div> {{welcomeMsg | slice:2}}</div>
              <div> {{welcomeMsg | slice:2:5}}</div>
              <div> {{welcomeMsg | slice:-9}}</div> <!--- If neg val  then the index is counted from end of the string/array-->
              <br>

              <p> #04. PercentPipe</p> 
              <div>{{'Original percent num :'+per}}</div>
              <div>{{per | percent}}</div>
              <div>{{per | percent:'1.2-2'}} </div>

              <br>
              <p> #05. CurrencyPipe</p> 
              <div>{{'Original currency Val :'+curVal}}</div>
              <div>{{curVal | currency}}</div>
              <div>{{curVal | currency:'INR'}}</div>
              <div>{{curVal | currency:'GBP'}}</div>
              <div>{{curVal | currency:'AUD':true:'4.2-2'}} </div>
              <div>{{curVal | currency:'CNY':false:'4.2-2'}} </div>

              <br>
              <p> #06. DatePipe</p> 
              <div>{{'Original Date  val :'+cDate}}</div>
              <div>{{cDate | date}}</div>
              <div>{{cDate | date:'medium'}}</div>
              <div>{{cDate | date:'short'}}</div>

              <div>{{cDate | date:'fullDate'}}</div>
              <div>{{cDate | date:'longDate'}}</div>

              <div>{{cDate | date:'mediumDate'}}</div>
              <div>{{cDate | date:'shortDate'}}</div>

              
              <div>{{cDate | date:'mediumTime'}}</div>
              <div> {{cDate | date:'dd-MM-y'}} </div>
              <div>{{cDate | date:'dd-MM-yy HH:mm'}} </div>

              
              <br>
              <p> #07. JsonPipe</p> 
              <div>{{'Original Object  val :'+jObject}}</div>
              <div>{{jObject |json}}</div>
  `,
  styles: [
    'div{text-align:center;color:red;font-size:30px;}',`h1{text-align:center;}`,`p{color:orange;font-size:25px;text-align:center;}`
  ]
})
export class PipeComponent implements OnInit {


  //#01. String transformation
   strData ="Welcome to Angular 10 Vibe ....!"

   //#02.NumberPipe
     salary:number=99850.45678

  //#03.SlicePipe
     welcomeMsg:string="welcome to angular pipes"

  //#04.percentPipe   
   per: number= .74562;

    //#05.CurrencyPipe
    curVal:number=198;

    //#06. DatePipe
    cDate: Date = new Date();

    //#07.JsonPipe
    jObject: Object = {firstname: 'harish', lastname: 'viru', nested: {empId:788, numbers: [1, 2, 3, 4, 5]}};
  constructor() { }
  ngOnInit(): void {}

}
