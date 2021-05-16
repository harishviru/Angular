import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven01',
  templateUrl: './template-driven01.component.html',
  styleUrls: ['./template-driven01.component.css']
})
export class TemplateDriven01Component implements OnInit {

  topics=['Angular','React','Bootstrap','Vue'];

  constructor() { }
  ngOnInit(): void {}

  onSubmit(form){
    console.log("form Values ",form.value);
    console.log("form control ",form.controls);
  }
}
