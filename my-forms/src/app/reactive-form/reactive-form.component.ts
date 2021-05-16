import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [
  ]
})
export class ReactiveFormComponent implements OnInit {

 registrationForm = new FormGroup({
    userName:new FormControl('Harish'),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    address      :new FormGroup({
      city       :new FormControl(''),
      state      :new FormControl(''),
      postalCode :new FormControl('')
    })
 })


 //For setValue method we have supply all values,
 //For patchValue ,we can supply any number of  values
 loadFormData(){
   /* this.registrationForm.setValue({
    userName:'HariViru',
    password:'One',
    confirmPassword:'One',
     address:{
       city:'Hyd',
       state:'Ts',
       postalCode:'500038'
     }
   }) */
    this.registrationForm.patchValue({
      userName:'HariViru',
      password:'One',
      confirmPassword:'One'
    })
 }



  constructor() { }
  ngOnInit(): void {
  }

}
