import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, ViewChild, NgModule } from '@angular/core';
import SignaturePad from 'signature_pad';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

const url = 'http://localhost:9000/';
class SignatureProcessingService {
    constructor(http) {
        this.http = http;
    }
    insertSignature(params) {
        console.log(params);
        return this.http.post(url + 'api/user/insertSignature', params);
    }
    insertUploadSignature(params) {
        console.log(params);
        return this.http.post(url + 'upload', params);
    }
}
SignatureProcessingService.ɵprov = ɵɵdefineInjectable({ factory: function SignatureProcessingService_Factory() { return new SignatureProcessingService(ɵɵinject(HttpClient)); }, token: SignatureProcessingService, providedIn: "root" });
SignatureProcessingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SignatureProcessingService.ctorParameters = () => [
    { type: HttpClient }
];

class SignatureProcessingUnitComponent {
    constructor(service) {
        this.service = service;
        this.backendRes = {
            spadu: { signdata: '' }
        };
        this.selectedFile = null;
    }
    selectImage(event) {
        if (event.target.value) {
            this.selectedFile = event.target.files[0];
        }
    }
    onUpload() {
        const fd = new FormData();
        // console.log(this.selectedFile.name,'hhhhhhhhhhhhhh');
        fd.append('sign', this.selectedFile, this.selectedFile.name);
        this.service.insertUploadSignature(fd).subscribe((result) => {
            this.backendRes = result;
            console.log(result);
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
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
        const base64 = this.signaturePad.toDataURL('image/png', 0.5);
        console.log(base64);
        const blob = this.base64toBlob(base64);
        this.service.insertSignature({ signdata: base64 }).subscribe(result => {
            console.log(result);
        });
        //console.log(blob);
    }
    base64toBlob(base64) {
        const bytestring = atob(base64.split(',')[1]);
        const mimeString = base64.split(',')[0].split(':')[1].split(':')[0];
        const byteNumbers = new Array(bytestring.length);
        for (let i = 0; i < bytestring.length; i++) {
            byteNumbers[i] = bytestring.charAt(i);
        }
        const ia = new Uint8Array(byteNumbers);
        return new Blob([ia], { type: mimeString });
    }
    download(dataURL, filename) {
        if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
            window.open(dataURL);
        }
        else {
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
        }
        else {
            const dataURL = this.signaturePad.toDataURL();
            this.download(dataURL, 'signature.png');
        }
    }
}
SignatureProcessingUnitComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-signature-processing-unit',
                template: "\n\n\n  <h1 class=\"text-header\">Signature Pad</h1>\n  <div class=\"signature-pad\">\n    <div class=\"signature-pad--body\">\n      <canvas #sPad width=\"900\" height=\"500\" style=\"touch-action: none;\"></canvas>\n    </div>\n  </div>\n  <br>\n  <br>\n  <section class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <button class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\n          <button class=\"btn btn-success\" (click)=\"savePNG()\">PNG</button>\n          <!-- <button class=\"btn btn-warning\" (click)=\"undo()\">Undo</button>\n          <button class=\"btn btn-info\" (click)=\"changeColor()\">Change Color</button> -->\n          <button class=\"btn btn-primary\" (click)=\"drawComplete()\">Save</button>\n        </div>\n        <div class=\"col-6\">\n         \n          <!-- <button class=\"btn btn-primary\" >JPG</button>\n          <button class=\"btn btn-secondary\" >SVG</button> -->\n        </div>\n        <form enctype=\"multipart/form-data\">\n          <div class=\"col-6\">\n            <input (change)=\"selectImage($event)\" name=\"sign\" class=\"form-control\" type=\"file\" style=\"width:25%\" required>\n          \n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onUpload()\">Upload</button>\n          </div>\n        </form>\n       \n      </div>\n  </section>\n  <pre>\n    <!-- {{backendRes.spadu.signdata}} -->\n    <img [src]=\"backendRes.spadu.signdata\" alt=\"Preview\" >\n  </pre>\n  \n      \n\n \n\n   \n\n\n\n\n\n\n\n \n\n",
                styles: [".signature-pad{position:relative;display:flex;flex-direction:column;font-size:10px;width:100%;height:100%;max-width:900px;border:1px solid #e8e8e8;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.27),inset 0 0 40px rgba(0,0,0,.08);border-radius:4px}.signature-pad--body{position:relative;flex:1;border:1px solid #f4f4f4}"]
            },] }
];
SignatureProcessingUnitComponent.ctorParameters = () => [
    { type: SignatureProcessingService }
];
SignatureProcessingUnitComponent.propDecorators = {
    signaturePadElement: [{ type: ViewChild, args: ['sPad', { static: true },] }]
};

class SignatureProcessingComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignatureProcessingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-signature-processing',
                template: `
    <p>
      signature-processing works!
    </p>
  `
            },] }
];
SignatureProcessingComponent.ctorParameters = () => [];

class SignatureProcessingModule {
}
SignatureProcessingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SignatureProcessingComponent, SignatureProcessingUnitComponent],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    FormsModule
                ],
                exports: [SignatureProcessingComponent, SignatureProcessingUnitComponent]
            },] }
];

/*
 * Public API Surface of signature-processing
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SignatureProcessingComponent, SignatureProcessingModule, SignatureProcessingService, SignatureProcessingUnitComponent };
//# sourceMappingURL=sunnykumarsk53-signature-processing.js.map
