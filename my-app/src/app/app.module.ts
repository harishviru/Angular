import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { ProperybindingComponent } from './properybinding/properybinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import {FormsModule} from "@angular/forms";
import { ChildComponentComponent } from './child-component/child-component.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { PipeComponent } from './pipe/pipe.component';



//Here NgModule decorator contains like "declarations,imports,providers,bootstrap"
/*
 • declarations   :  We have specifies/add components that are defines in these module(appModule)
 • imports        :  It used for adding dependencies to the NgModule ,Since we are creating browser based app,so we have to import BrowserModule
 • providers      : Here we can add sevices.
 • bootstrap      : When these module can be used for bootstrap app,.i.e we have to load AppComponent.
*/
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    TestComponent,
    ProperybindingComponent,
    StylebindingComponent,
    ClassbindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    ChildComponentComponent,
    StructuralDirectivesComponent,
    PipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
