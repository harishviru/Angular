import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  template: `
    <p>
      ClassBinding works!
    </p>
    <div class="red">                    HTML Class Attribute    </div>
    <div [className]="'red'">            Using ClassName Property </div>
    <div [className]="'red fontSze'">    Using ClassName multiple properties</div>
    <div class="red" [className]="'fontSze'"> Both Using class and ClassName </div>
    
     <div [className]="hasError() ? 'red' : 'fontSze'"> conditonal operator with [className]</div>
          <br>
    <div bind-className="hasError() ? 'red' : 'fontSze'"> conditonal operator 2 with bind-className</div>

     <div [class.red]="condition">  Class binding with Class  class.className </div>     
     <br>
     <div [class.red]="condition" [class.fontSze]="condition">Class binding with Class with Conditional operator</div>
     <br>
     <div [ngClass]="'red'"> ngClass with String </div>
     <br>
     <div [ngClass]="['red','fontSze']"> ngClass with Array </div>
     <br>
     <div [ngClass]="{'red':true,'fontSze':true}"> ngClass with Object </div>
     <br>
      <div ngClass='red fontSze'>Red Text with Size 20px (another Way of defining)</div> 
     <br>

  `,
  styles: [
    `.fontSze{font-size: 30px;} `,`.red{color:red;text-align:center},`,'div{text-align:center;}'
  ]
})
export class ClassbindingComponent implements OnInit {

  
  condition=true;
  cssStringVar: string= 'red fontSze';
  hasError(){
      return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
