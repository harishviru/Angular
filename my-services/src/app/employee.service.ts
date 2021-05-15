import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 constructor() { }
  getEmployees(){
     return [
      {"id": 1, "first_name": "Corabella","last_name": "Bee","email": "cbee0@nbcnews.com","gender": "Female"}, 
      { "id": 2,"first_name": "Darcie", "last_name": "Feldbrin", "email": "dfeldbrin1@desdev.cn", "gender": "Female"}, 
      { "id": 3, "first_name": "Margeaux", "last_name": "Vogelein", "email": "mvogelein2@fotki.com", "gender": "Male" },
      { "id": 4, "first_name": "Danya", "last_name": "Fenna", "email": "dfenna3@wikimedia.org", "gender": "Female" },
      { "id": 5, "first_name": "Viviyan", "last_name": "Meeke", "email": "vmeeke4@goo.gl", "gender": "Male" },
       { "id": 6, "first_name": "Eben", "last_name": "Trahmel", "email": "etrahmel5@patch.com", "gender": "Female" },
       { "id": 7, "first_name": "Garrott", "last_name": "Fandrey", "email": "gfandrey6@pbs.org", "gender": "Female" }, 
       { "id": 8, "first_name": "Sascha", "last_name": "Zecchi", "email": "szecchi7@topsy.com", "gender": "Male" }
      ]
  } 
}
