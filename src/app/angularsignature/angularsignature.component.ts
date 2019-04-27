import { Component, OnInit, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad/signature-pad'; 

@Component({
  selector: 'app-angularsignature',
  templateUrl: './angularsignature.component.html',
  styleUrls: ['./angularsignature.component.css']
})
export class AngularsignatureComponent implements OnInit {

  @ViewChild(SignaturePad) signaturePad: SignaturePad;
  public base64Image: string = '';

  public signaturePadOptions: Object = {
    'minWidth': 2,
    'penColor': 'rgb(66, 133, 244)',
    'backgroundColor': 'rgb(255,255,255)',
    'canvasWidth': 450,
    'canvasHeight': 150
  };

  drawComplete() {
    const base64 = this.signaturePad.toDataURL('image/png', 0.5);
    console.log(base64);
    this.base64Image = base64;
    const blob = this.dataURItoBlob(base64);
    console.log(blob);
    this.signaturePad.clear();
  }

  dataURItoBlob(dataURI) {
    const byteString = atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const byteNumbers = new Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        byteNumbers[i] = byteString.charAt(i);
    }
    const ia = new Uint8Array(byteNumbers);
    return new Blob([ia], {type: mimeString});
  }
  drawClear() {
    this.signaturePad.clear();
  }

  constructor() { }

  ngOnInit() {
  }

}
