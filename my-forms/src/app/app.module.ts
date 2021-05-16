import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TemplateDriven01Component } from './template-driven01/template-driven01.component';
import {FormsModule} from '@angular/forms';
import { TemplateDriven02Component } from './template-driven02/template-driven02.component';
import { TemplateDriven03Component } from './template-driven03/template-driven03.component'
import {HttpClientModule} from '@angular/common/http' 
import {EnrollmentService} from './enrollment.service';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'
import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveForm02Component } from './reactive-form02/reactive-form02.component'


@NgModule({
  declarations: [
    AppComponent,
    TemplateDriven01Component,
    TemplateDriven02Component,
    TemplateDriven03Component,
    ReactiveFormComponent,
    ReactiveForm02Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
