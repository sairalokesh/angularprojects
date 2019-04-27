import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angulardatetime',
  templateUrl: './angulardatetime.component.html',
  styleUrls: ['./angulardatetime.component.css']
})
export class AngulardatetimeComponent implements OnInit {

  date: Date = new Date();
  settings = {
    bigBanner: true,
    timePicker: true,
    format: 'dd-MM-yyyy hh:mm a',
    defaultOpen: false,
    closeOnSelect: false
  };

  constructor() { }

  ngOnInit() {
  }

}
