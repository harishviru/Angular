import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormArray} from '@angular/forms'
import { forbiddenNameValidator } from '../shared/custom.validator';
import {PasswordValidator} from '../shared/password.validator'

@Component({
  selector: 'app-reactive-form02',
  templateUrl: './reactive-form02.component.html',
  styles: [
  ]
})
export class ReactiveForm02Component implements OnInit {

  constructor(private formbd:FormBuilder) { }
  ngOnInit(): void {}

  registrationForm=this.formbd.group({
    // userName:['',Validators.required], //For one validation
    // userName:['',[Validators.required,Validators.minLength(4),forbiddenNameValidator]], // For more than one validation
    userName:['',[Validators.required,Validators.minLength(4),forbiddenNameValidator(/admin/)] ], //CustomValidation
    password:[''],
    email:['',[Validators.required]],
    subscribe:[false],
    confirmPassword:[''],
    address:this.formbd.group({
       city:[''],
       state:[''],
       postalCode:['']
    }),
    phoneNo:[''],
    alternatePhoneNos :this.formbd.array([])
  },{Validator:PasswordValidator});

//   registrationForm = new FormGroup({
//     userName:new FormControl('Harish'),
//     password:new FormControl(''),
//     confirmPassword:new FormControl(''),
//     address      :new FormGroup({
//       city       :new FormControl(''),
//       state      :new FormControl(''),
//       postalCode :new FormControl('')
//     })
//  })
get email() {
  return this.registrationForm.get('email');
}
get phoneNo() {
  return this.registrationForm.get('phoneNo');
}

get alternatePhoneNos() {
  return this.registrationForm.get('alternatePhoneNos') as FormArray;
}

addAlternatePhoneNos() {
  this.alternatePhoneNos.push(this.formbd.control(''));
}

onSubmit(){
  console.log(this.registrationForm.value);
}

}
