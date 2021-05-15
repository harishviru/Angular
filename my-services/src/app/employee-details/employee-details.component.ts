import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  template: `
    <p>Employee-details works...!</p>
      
    <table style="border:1px solid green;">
    <tr>
       <th>Id</th>
       <th>Name</th>
       <th>Email</th>
       <th>Gender</th>
     </tr>
       <tbody>
       <tr *ngFor="let emp of employees">
            <td>{{emp.id +'.'}}</td> 
            <td> {{emp.first_name}} {{emp.last_name}}</td>
             <td>{{emp.email}}</td> 
             <td>{{emp.gender}}</td>
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
export class EmployeeDetailsComponent implements OnInit {

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
