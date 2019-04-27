import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  public user: any = {};
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
  }

  save(user: any) {
    this.form.reset();
  }

}
