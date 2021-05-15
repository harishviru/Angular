import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  template: `
    <p>Structural-Directives works!</p>
    <div [style.color]="'green'">ngIf </div>
     <div *ngIf="condition">Welcome User</div>

     <div *ngIf="condition; else elseBlock"> Welcome to if Block</div>
     <ng-template #elseBlock>
                 <div>Welcome to elseBlock</div>
     </ng-template>

     <div *ngIf="condition1;then thenBlock else elseBlock1"></div>
     <ng-template #thenBlock>
                 <div>Welcome to thenBlock</div>
     </ng-template>
     <ng-template #elseBlock1>
              <div>Welcome to elseBlock1</div>
      </ng-template>
      <br> <br>

    

      <div>
           Show <input type="checkbox" [(ngModel)]="showMe"/>
      </div>
      <h1>ngIf </h1>
      <div *ngIf="showMe">
                 ShowMe is checked
      </div>
       <div *ngIf="!showMe">
             ShowMe is unchecked
       </div>
 
       <h1>ngIf Else</h1>
       <div *ngIf="showMe; else elseBlock2">
          ShowMe is checked
       </div>
          <ng-template #elseBlock2>
                  <div>ShowMe is unchecked Using elseBlock</div>
         </ng-template>


         <h1>ngIf then else</h1>
        <div *ngIf="showMe; then thenBlock3 else elseBlock3">
               This is not rendered
        </div>
 
         <ng-template #thenBlock3>
                    <div>ShowMe is checked Using thenblock</div>
          </ng-template>
          <ng-template #elseBlock3>
                     <div>ShowMe is unchecked Using elseBlock</div>
          </ng-template>

          <h1>using hidden </h1>
          <div [hidden]="showMe">
              content to render, when the condition is true  using hidden property binding
         </div>
 
           <div [hidden]="!showMe">
                  content to render, when the condition is false. using hidden property binding
           </div>
            <br><br>
            <div [style.color]="'green'">ngSwitch </div>
            <input [style.margin-left]="'590px'" placeholder="Enter nums 0 to 9 any one num" type='text' [(ngModel)] ="num"/>
            <div [ngSwitch]="num">
                  <div *ngSwitchCase="'1'">One</div>
                  <div *ngSwitchCase="'2'">Two</div>
                  <div *ngSwitchCase="'3'">three</div>
                  <div *ngSwitchCase="'4'">four</div>
                  <div *ngSwitchCase="'5'">five</div>
                  <div *ngSwitchCase="'6'">six</div>
                  <div *ngSwitchCase="'7'">seveen</div>
                  <div *ngSwitchCase="'8'">eight</div>
                  <div *ngSwitchCase="'9'">nine</div>
                  <div *ngSwitchCase="'0'">Zero</div>
                  <div *ngSwitchDefault>Invalid Num</div>
            <div>

            <br><br>
            <div [style.color]="'green'">ngFor </div>
            <div *ngFor="let car of cars; let i=index;let o=odd;let e=even;let f=first;let l=last;">
               <div [style.color]="'orange'">index eq  {{i}} , odd eq {{o}}, even eq {{e}}, first eq {{f}} ,last eq {{l}}</div>
               <div [style.color]="'brown'">{{car.color}} | {{car.type}} | {{car.registration}} | {{car.capacity}}</div>
            <div>
  `,
  styles: [
    'div{text-align:center;color:red;font-size:30px;}',`h1{text-align:center;}`,`p{color:orange}`,`p{text-align:center}`
  ]
})
export class StructuralDirectivesComponent implements OnInit {

   condition=true;
   condition1=false;
   showMe=true;

   //For Switch
    num=0;

    //For ngFor
     cars = [
      {
        "color": "purple",
        "type": "minivan",
        "registration": new Date('2017-01-03'),
        "capacity": 7
      },
      {
        "color": "red",
        "type": "station wagon",
        "registration": new Date('2018-03-03'),
        "capacity": 5
      },
      {
        "color": "green",
        "type": "mini station ",
        "registration": new Date('2020-06-02'),
        "capacity": 8
      }
    ];
    




  constructor() { }
  ngOnInit(): void {}
}
