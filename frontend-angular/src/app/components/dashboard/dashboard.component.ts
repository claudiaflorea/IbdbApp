import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  greet: string;
  constructor() {
    this.greet = 'Hi, Admin! What do you want to do today?';
  }
  ngOnInit() {
  }

}
