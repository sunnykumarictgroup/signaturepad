import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
 import { SignatureProcessingService } from '../signature-processing.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-signature-processing-unit',
  templateUrl: './signature-processing-unit.component.html',
  styleUrls: ['./signature-processing-unit.component.css']
})

export class SignatureProcessingUnitComponent implements OnInit {
  @ViewChild('sPad', {static: true}) signaturePadElement;
  signaturePad: any;
 backendRes: any = {
  spadu:{signdata:''}
 }
  selectedFile: any = null;
  selectImage(event: any){
    if(event.target.value){
      this.selectedFile = <File>event.target.files[0]
    }
  
   
  }
  onUpload() {

    const fd = new FormData();
    // console.log(this.selectedFile.name,'hhhhhhhhhhhhhh');
    fd.append('sign', this.selectedFile,this.selectedFile.name)
      this.service.insertUploadSignature(fd).subscribe((result:any)=>{
        this.backendRes=result;
      console.log(result)
    })

  }

  constructor(private service : SignatureProcessingService) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
  }

  clear() {
    this.signaturePad.clear();
  }
  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }
  changeColor() {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);
    const color = 'rgb(' + r + ',' + g + ',' + b + ')';
    this.signaturePad.penColor = color;
  }

  drawComplete() {
    
    const base64 = this.signaturePad.toDataURL('image/png',0.5);
    console.log(base64);
    const blob = this.base64toBlob(base64);
    this.service.insertSignature({signdata:base64}).subscribe(result=>{
      console.log(result)
    })
    //console.log(blob);
   
  }
  base64toBlob(base64) {
    const bytestring = atob(base64.split(',')[1]);
    const mimeString = base64.split(',')[0].split(':')[1].split(':')[0];
    const byteNumbers = new Array(bytestring.length);
    for (let i=0; i<bytestring.length; i++) {
      byteNumbers[i] = bytestring.charAt(i);
    }
    const ia = new Uint8Array(byteNumbers);
    return new Blob([ia], {type: mimeString});
  }
  download(dataURL, filename) {
    if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      window.open(dataURL);
    } else {
      const blob = this.dataURLToBlob(dataURL);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;

      document.body.appendChild(a);
      a.click();

      window.URL.revokeObjectURL(url);
    }
  }
  dataURLToBlob(dataURL) {
    // Code taken from https://github.com/ebidel/filer.js
    const parts = dataURL.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], { type: contentType });
  }
  savePNG() {
    if (this.signaturePad.isEmpty()) {
      alert('Please provide a signature first.');
    } else {
      const dataURL = this.signaturePad.toDataURL();
      this.download(dataURL, 'signature.png');
    }
  }
  


}