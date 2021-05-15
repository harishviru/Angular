import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap,Router} from '@angular/router'

@Component({
  selector: 'app-department-details',
  template: `
      


    <p> Department-details Component  with selected departmentId :{{departmentId}} </p>
    <a (click)="goPrevious()">Previous</a>
    <a (click)="goNext()">Next</a>
      <br/>
      <button (click)="goToDepartment()">Back </button>

      <br>
      <br>
       <hr/>
      <h2> child routes [ Department details having child route]</h2>
      <button (click)="showOverview()">Overview</button>
      <button (click)="showContact()">Contact</button>
      <router-outlet></router-outlet>


  `,
  styles: [
    `p{text-align:center;color:green;font-weight:bold;font-size:25px;}
     a{display: inline-block;
      text-decoration: none;
      font-size: 20px;
      width: 100px;
      height: 25px;
      padding: 40px 24px;
      font-style: italic;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color:red;
    }`

  ]
})
export class DepartmentDetailsComponent implements OnInit {

  public departmentId :any;

  constructor(private activateRoute:ActivatedRoute,
              private router:Router
    ) { }

  ngOnInit() {  
    // let id =this.activateRoute.snapshot.paramMap.get('id');
    // this.departmentId=id;
       this.activateRoute.paramMap.subscribe( (params:ParamMap)=>{
          let id=params.get('id');
          this.departmentId=id;
       })
  }
  goPrevious(){
    let previousId =parseInt(this.departmentId)-1;
    this.router.navigate(['/departments',previousId])
  }
  goNext(){
     let nextId =parseInt(this.departmentId)+1;
     this.router.navigate(['/departments',nextId])
  }
   
  goToDepartment(){
    let selectedId =this.departmentId;
   // this.router.navigate(['/departments',{id:selectedId}]); //Here Object is Optional Route parameters
      this.router.navigate(['../',{id:selectedId}],{relativeTo:this.activateRoute});   //Relative Path ,above one is absloute path [../ go back one step]
  }


  //For child routes
   showOverview(){
    this.router.navigate(['overview'],{relativeTo:this.activateRoute})
  }
  showContact(){
    this.router.navigate(['contact'],{relativeTo:this.activateRoute})
  }

}
