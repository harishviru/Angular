import { Component, OnInit } from '@angular/core';

//#02.Interpolation

@Component({
  selector: 'app-test',
  template: `
       <p> TestComponent works! </p>
       <p>{{"welcome to " +name}}</p>
       <p> {{getUserName()}}</p>
       <p>{{name.toUpperCase()}}</p>
      <!-- <p> {{x=3}} </p>  we cannot assign values /Javascript global objects-->
      <p>{{myURL}}</p>
  `,
  styles: [
`
     p{
       color:green;
       font-size:25px;
     }
 `
  ]
})
export class TestComponent implements OnInit {


  name :string  = "Angular 10 Tutorials ..!";
  myURL:string  = window.location.href;

  getUserName(){
    return "Angular 10"
  }

  constructor() { }
  ngOnInit(): void {
  }

}
