import { Component, OnInit } from '@angular/core';
import {Course} from '../course'
import { EnrollmentService } from '../enrollment.service';

@Component({
  selector: 'app-template-driven03',
  templateUrl: './template-driven03.component.html',
  styles: [
  ]
})
export class TemplateDriven03Component implements OnInit {

  //courseModel = new Course('Harish','harish@gmail.com',7799330022,'','evening',true);

  //When api call ,we can get default for select but not '' empty string
  courseModel = new Course('Harish','harish@gmail.com',7799330022,'default','evening',true);


  topics =['Angular','React','Bootstrap','Vue'];
  topicHasError=true;
  submitted :boolean=false;
  errorMsg ="";


  constructor(private _enrollService:EnrollmentService) { }
  ngOnInit(): void {
  }
  validateTopic(value){
    if(value==='default'){
          this.topicHasError=true;
    }else{
          this.topicHasError=false;
    }
  }

  onSubmit(form){
    this.submitted=true;
    console.log("form Values ",form.value);
    console.log("form control ",form.controls);
    console.log("Whole Form status :",form.form.valid);
    this._enrollService.enrollment(this.courseModel)
        .subscribe(
            data=>console.log('data ',data),
            error=>this.errorMsg=error.statusText
        )
  }
}
