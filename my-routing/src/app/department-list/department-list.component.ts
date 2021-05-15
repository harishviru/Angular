import { Component, OnInit } from '@angular/core';
import {Router ,ActivatedRoute,ParamMap} from '@angular/router'

@Component({
  selector: 'app-department-list',
  template: `
               <p>Department-list Component Here......!</p>
               <ul class="items">
                    <li  (click)="onDepartSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departmentList">
                     <span class="badge">{{department.id}}</span>{{department.name}}
                    </li>
               </ul>

  `,
  styles: [
      `p{text-align:center;color:green;font-weight:bold;font-size:25px;margin-top: 300px;position: absolute;top: -200px;left: 450px;}
      `  
    
  ]
})
export class DepartmentListComponent implements OnInit {

public selectedId:any;

 departmentList=[
   {id:1,name:'React Js'},
   {id:2,name:'Angular'},
   {id:3,name:'Vue'},
   {id:4,name:'Express Js'},
   {id:5,name:'Javascript'},
 ]

 constructor(private _route:Router,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe( (params:ParamMap)=>{
      let id=params.get('id');
      this.selectedId=id;
   })
  }

  onDepartSelect(department:any){
    // this._route.navigate(['/departments',department.id]);     //Statically we are placing like 'departments' [It is absoulte path]
     this._route.navigate([department.id],{relativeTo:this.activateRoute})      //Relative path
  }
  
  isSelected(department:any){
    return department.id==this.selectedId;
  }

}
