import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartType = 'bar';
  public barChartData = {};

  public lineChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public lineChartType = 'line';
  public lineChartData = {};

  public doughnutChartOptions: any = {
    responsive: true
  };

  public doughnutChartType = 'doughnut';
  public doughnutChartData = {};

  public pieChartOptions: any = {
    responsive: true
  };

  public pieChartType = 'pie';
  public pieChartData = {};

  public radarChartOptions: any = {
    responsive: true
  };

  public radarChartType = 'radar';
  public radarChartData = {};

  public polarChartOptions: any = {
    responsive: true
  };

  public polarChartType = 'polarArea';
  public polarChartData = {};

  constructor() { }

  ngOnInit() {
    this.barChartData = {
      labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      datasets: [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Income', backgroundColor: 'red'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Expanses', backgroundColor: 'green'},
      ]
    };

    this.lineChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#2a91d6', borderColor: '#2a91d6', fill : false },
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#f66183', borderColor: '#f66183', fill : false}
      ]
    };

    this.doughnutChartData = {
      labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      datasets: [{
        backgroundColor: ['red', 'blue', 'green'],
        data: [350, 450, 100]
      }]
    };

    this.pieChartData = {
      labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      datasets: [{
        backgroundColor: ['red', 'blue', 'green'],
        data: [350, 450, 100]
      }]
    };

    this.radarChartData = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#2a91d6', borderColor: '#2a91d6', fill : false },
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#f66183', borderColor: '#f66183', fill : false},
        {data: [18, 35, 22, 8, 4, 16, 30], label: 'Series c', backgroundColor: 'green', borderColor: 'green', fill : false}
      ]
    };

    this.polarChartData = {
      labels: ['Red', 'Yellow', 'Blue'],
      datasets: [{
        data: [350, 450, 100],
        backgroundColor: ['red', 'Yellow', 'Blue']
      }]
    };

  }

}
