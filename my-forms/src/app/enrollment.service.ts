import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Course } from './course';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url="http://localhost:3000/enroll";

  constructor(private _http:HttpClient) { }

  enrollment(courseForm:Course){
    //console.log(courseForm);
    return this._http.post<any>(this._url,courseForm)
              .pipe(catchError(this.errorHandler))
  }
   
  errorHandler(error:HttpErrorResponse){
     return throwError(error);
  }

}
