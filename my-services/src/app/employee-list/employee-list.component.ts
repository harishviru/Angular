import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee-list',
  template: `
    <p> Employee-list works!  </p>
     <div *ngFor="let emp of employees">
           {{emp.id}} {{emp.first_name}} {{emp.last_name}}
     </div>
  `,
  styles: [
    `p{text-align:center;color:red;font-weight:bold;font-size:25px;}`,
    `div{
      text-align:center;color:blue;font-weight:bold;font-size:25px;
    }`
  ]

})
export class EmployeeListComponent implements OnInit {

  public employees=[ 
   { "id": 1, "first_name": "Corabella", "last_name": "Bee", "email": "cbee0@nbcnews.com", "gender": "Genderqueer" }, 
   { "id": 2, "first_name": "Darcie", "last_name": "Feldbrin", "email": "dfeldbrin1@desdev.cn", "gender": "Female" }, 
   { "id": 3, "first_name": "Margeaux", "last_name": "Vogelein", "email": "mvogelein2@fotki.com", "gender": "Non-binary" }, 
   { "id": 4, "first_name": "Danya", "last_name": "Fenna", "email": "dfenna3@wikimedia.org", "gender": "Genderqueer" },
   { "id": 5, "first_name": "Viviyan", "last_name": "Meeke", "email": "vmeeke4@goo.gl", "gender": "Agender" },
   { "id": 6, "first_name": "Eben", "last_name": "Trahmel", "email": "etrahmel5@patch.com", "gender": "Non-binary" }, 
   { "id": 7, "first_name": "Garrott", "last_name": "Fandrey", "email": "gfandrey6@pbs.org", "gender": "Non-binary" }, 
   { "id": 8, "first_name": "Sascha", "last_name": "Zecchi", "email": "szecchi7@topsy.com", "gender": "Male" }
  ] 

  constructor() { }
  ngOnInit(): void {
  }
}
