import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any = [];
  allfiles: any = [];

  constructor() { }

  ngOnInit() {
  }


  onSelectFile(event) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const image = {
          name : '',
          type : '',
          size : '',
          url : ''

        };
        this.allfiles.push(files[i]);
        image.name = event.target.files[i].name;
        image.type = event.target.files[i].type;
        const size = event.target.files[i].size / 1000;
        const MBC = size + '';
        const MB = MBC.split('.')[0];
        const length = MB.length;
        console.log(length);
        if (length === 4 || length === 5) {
          const mbsize = size / 1000;
          const splitdata = mbsize + '';
          const splitvalues = splitdata.split('.');
          let secondvariable = '';
          for (let j = 0; j < splitvalues.length; j++) {
            if (j === 1) {
              secondvariable = splitvalues[j].slice(0, 2);
            }
          }
          image.size = splitvalues[0] + '.' + secondvariable + ' MB';
        } else {
          const splitdata = size + '';
          const splitvalues = splitdata.split('.');
          let secondvariable = '';
          for (let j = 0; j < splitvalues.length; j++) {
            if (j === 1) {
              secondvariable = splitvalues[j].slice(0, 2);
            }
          }
          image.size = splitvalues[0] + '.' + secondvariable + ' KB';
        }
        const reader = new FileReader();
        reader.onload = (filedata) => {
          image.url = reader.result + '';
          this.images.push(image);
        };
        reader.readAsDataURL(event.target.files[i]);
      }
    }
    event.srcElement.value = null;
  }
  save() {
    console.log(this.allfiles);
  }

  deleteImage(image: any) {
    const  index = this.images.indexOf(image);
    this.images.splice (index, 1);
    this.allfiles.splice (index, 1);
    console.log(index);
  }





}
