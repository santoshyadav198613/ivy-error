import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  exams: any = [
    { name: "exame 1", id: 1 },
    { name: "exame 2", id: 2 },
    { name: "exame 3", id: 3 },
    { name: "exame 4", id: 4 },
    { name: "exame 5", id: 5 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
