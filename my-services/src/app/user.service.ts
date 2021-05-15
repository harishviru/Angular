import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {User} from './User'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _URL :string='/assets/data/users.json'
  constructor(private _http:HttpClient) { }
  

  getUsers():Observable<User[]> {
     return this._http.get<User[]>(this._URL);
  }
   //To handle Error We can use catch ,throw in rxjs

}
