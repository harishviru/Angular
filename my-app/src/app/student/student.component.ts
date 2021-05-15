import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student', // we can specifes like these  #01. 'app-student' ===> <app-student></app-student> , #02.  '.app-student' === <div class="app-student"></div>, #03. '[app-student]'  === <div app-student></div>
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
