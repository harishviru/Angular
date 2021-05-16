import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-template-driven02',
  templateUrl: './template-driven02.component.html',
  styles: [
  ]
})
export class TemplateDriven02Component implements OnInit {


  courseModel = new Course('Harish','harish@gmail.com',7799330022,'','evening',true);


  topics=['Angular','React','Bootstrap','Vue'];

  constructor() { }
  ngOnInit(): void {
  }

  onSubmit(form){
    console.log("form Values ",form.value);
    console.log("form control ",form.controls);
  }

}
