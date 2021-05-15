import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    // {path:'',component:DepartmentListComponent} ,//default Route
    {path:'',redirectTo:'/departments',pathMatch:'full'},//Redirect
    {path:'departments'  ,component:DepartmentListComponent},
   // {path:'departments/:id',component:DepartmentDetailsComponent},//Route parameters [Here we are using placeholder like :id]
    //Route which have child routes
    {
      path:'departments/:id'  ,
      component:DepartmentDetailsComponent,
      children:[
             {path:'overview',component:DepartmentOverviewComponent},
             {path:'contact',component:DepartmentContactComponent}
      ]
    },
    {path:'employees'    ,component:EmployeeListComponent},
    {path:"**"           ,component:PageNotFoundComponent},//It must be last ,becoz it match every route if you place other than last 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents  =[DepartmentListComponent,
                                 EmployeeListComponent,
                                 PageNotFoundComponent,
                                 DepartmentDetailsComponent,
                                 DepartmentOverviewComponent,
                                 DepartmentContactComponent]