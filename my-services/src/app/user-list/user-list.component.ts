import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {User} from '../User'



@Component({
  selector: 'app-user-list',
  template: `
      <p> User-list works!  </p>
      <br>
      <p *ngIf="errorMsg">{{errorMsg.statusText}}</p>
     <div *ngFor="let user of users">
          {{user.user_id +'.'}} {{user.user_name}}
     </div>
  `,
  styles: [
    `p{text-align:center;color:red;font-weight:bold;font-size:25px;}`,
    `div{
      text-align:center;color:blue;font-weight:bold;font-size:25px;
    }`
  ]

})
export class UserListComponent implements OnInit {

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
