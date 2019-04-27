import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent {

  title = 'app';
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
      lastName: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'),  Validators.minLength(2)])]),
      email: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])]),
      phoneNumber: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[0-9+ ]*'), Validators.minLength(10), Validators.maxLength(14)])])
    });
  }

  saveUser(userForm: any) {
    if (userForm.valid) {
      console.log(userForm.value);
      this.reactiveForm.reset();
    } else {
      this.validateFormFields(userForm);
    }

  }

  validateFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach(field => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsTouched({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateFormFields(control);
    }
  });
}
}
