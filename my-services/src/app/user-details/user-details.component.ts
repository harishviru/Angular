import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../User'


@Component({
  selector: 'app-user-details',
  template: `
  <p>User-details  works...!</p>
  <p *ngIf="errorMsg">{{errorMsg.statusText}}</p>
  <table style="border:1px solid green;">
  <tr>
     <th>Id</th>
     <th>Name</th>
     <th>Email</th>
     <th>Location</th>
   </tr>
     <tbody>
     <tr *ngFor="let user of users">
          <td>{{user.user_id }}</td> 
          <td> {{user.user_name}}</td>
           <td>{{user.email}}</td> 
           <td>{{user.location}}</td>
      </tr>
     </tbody>
  </table>
  

`,
styles: [
  `p{text-align:center;color:red;font-weight:bold;font-size:25px;}`,
  `div{
    text-align:center;color:blue;font-weight:bold;font-size:25px;
  }`,
  `table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 50%;
    margin-left:350px;
  }`
  ,`td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  `,
  `tr:nth-child(even) {
    background-color: #dddddd;
  }`
]
})
export class UserDetailsComponent implements OnInit {

  users :User[]=[];
  errorMsg :any;


  constructor(private _userService:UserService) { }
  ngOnInit(): void {
      this._userService.getUsers()
      .subscribe(
        (data)=>{
          this.users=data
        },
        (error)=>{
          this.errorMsg=error;
          //console.log(this.errorMsg)
        }
    );
  }
}
