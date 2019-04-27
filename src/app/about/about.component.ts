import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  itle = 'app';
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      password: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])]),
      confirmPassword: new FormControl('', [Validators.required, Validators.compose([Validators.pattern('[a-zA-Z ]*'),  Validators.minLength(2), this.passwordMatchValidator])])
    });

    this.reactiveForm.controls.password.valueChanges.subscribe(
      x => this.reactiveForm.controls.confirmPassword.updateValueAndValidity()
    );
  }

  passwordMatchValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const confirmPassword = control.value;
      const passwordctrl = control.root.get('password');
      if (passwordctrl) {
        const password = passwordctrl.value;
        if (confirmPassword !== '' && password !== confirmPassword) {
          return {
            mismatch : true
          };
        }
      }
    }
    return null;
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
