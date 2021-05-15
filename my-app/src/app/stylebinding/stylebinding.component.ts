import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  template: `
    <p>Stylebinding works! </p>
    <div style="color:red;font-size:25px;">Style Binding By HTML Style Attribute<div>
    <div [style.color]="'green'">Style Binding By [style.property] <div>
    <div bind-style.color="'green'">Style Binding By bind-style.property <div>
    <div [style.color]="required ? 'green':'red'">Conditionally Style Binding  <div>
    <div [ngStyle]="{'color':'green','font-size':'30px','font-variant': 'small-caps','font-style': 'italic'}"> Multiple properties By Using ngStyle Binding  <div>
    <div [attr.id]="divId"> Attribute Binding  with divId </div>
    <p [attr.id]="'pId'"> Attribute Binding  with pId </p>
`,
  styles: [
    'div{text-align:center;}'
  ]
})
export class StylebindingComponent implements OnInit {
   divId="divCId"
   required =false;
  constructor() { }
  ngOnInit(): void {
  }
}
