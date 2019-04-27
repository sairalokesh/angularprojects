import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-nestedreactiveforms',
  templateUrl: './nestedreactiveforms.component.html',
  styleUrls: ['./nestedreactiveforms.component.css']
})
export class NestedreactiveformsComponent implements OnInit {

  nestedReactiveForm: any = FormGroup;

  constructor(private fb: FormBuilder) {
    this.nestedReactiveForm = this.fb.group({
      userforms : this.fb.array([this.userForm()])
    });
   }

   userForm(): FormGroup {
     return this.fb.group({
       firstName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(3)])],
       lastName: ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)])],
       email: ['', Validators.compose([Validators.required, Validators.pattern('^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$')])],
       phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9+ ]*'), Validators.minLength(10), Validators.maxLength(14)])],
       images: this.fb.array([])
     });
   }

   addNewForm(): void {
     const control = <FormArray>this.nestedReactiveForm.controls.userforms;
     control.push(this.userForm());
   }

   removeSelectedForm(index: number): void {
    const control = <FormArray>this.nestedReactiveForm.controls.userforms;
    control.removeAt(index);
   }

   onSelectFile(evt: any, index: any) {
    const file = evt.target.files;
    const control = <FormArray>this.nestedReactiveForm.controls.userforms['controls'][index].controls['images'].controls;
    for (let i = 0; i < file.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = reader.result + '';
        control.push(this.fb.control(base64));
      };
      reader.readAsDataURL(file[i]);
    }
    evt.srcElement.value = null;
  }

  removeImage(itemindex, imageindex) {
    console.log(itemindex + ' ' + imageindex);
    const control = <FormArray>this.nestedReactiveForm.controls.userforms['controls'][itemindex].controls['images'];
    control.removeAt(imageindex);
  }

   save(allforms: any) {
    for (let i = 0; i < allforms.userforms.length; i++) {
      allforms.userforms[i].images = this.nestedReactiveForm.controls.userforms['controls'][i].controls['images'].controls;
      allforms.userforms[i].images = allforms.userforms[i].images.map(data => data.value);
    }
    console.log(allforms);
   }

  ngOnInit() {
  }







}
