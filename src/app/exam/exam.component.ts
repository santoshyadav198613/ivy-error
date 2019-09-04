import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  selected: any = { name: 'Nothing', id: -1 };
  exams: any = [
    { name: "Test CS-21", id: 21 },
    { name: "Test CS-22", id: 22 },
    { name: "Test CS-23", id: 23 },
    { name: "Test CS-24", id: 24 },
    { name: "Test CS-25", id: 25 },
  ];

  constructor() { }

  ngOnInit() {

  }

  updateSelection(selection: any) {
    this.selected = selection;
  }

}
