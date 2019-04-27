import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  public isadd = true;
  public dbRestaurants: any = [];

  public userForm: FormGroup;
  public successMessage: any = '';
  public errorMessage: any = '';

  constructor(private fb: FormBuilder, private jsonService: JsonService) {
    this.userForm = this.fb.group({
      firstName: ['', Validators.compose([Validators.pattern('[a-zA-z ]*'), Validators.required])],
      lastName: ['', Validators.compose([Validators.pattern('[a-zA-z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$'), Validators.required])],
      phone: ['', Validators.compose([Validators.pattern('[0-9]*'), Validators.minLength(10), Validators.maxLength(12), Validators.required])],
      type: ['', Validators.compose([Validators.required])],
      restaurants: this.fb.array([])
    });
  }

  ngOnInit() {
    this.jsonService.getRestaurants().subscribe(
      data => {
        for (let i = 0; i < data.length; i++) {
          data[i].restaurantId = i + 1;
          this.dbRestaurants.push(data[i]);
        }
      },
      err => {
        this.successMessage = '';
        this.errorMessage = err.error.message;
      });
  }

  onChange(resturant: any, isChecked: boolean) {
    const control = <FormArray>this.userForm.controls.restaurants;
    if (isChecked) {
      control.push(new FormControl(resturant));
    } else {
      const index = control.controls.findIndex(x => x.value === resturant);
      control.removeAt(index);
    }
  }

  adduser(userForm) {
    console.log(userForm.value);
  }

}
