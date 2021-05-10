import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, ViewChild, NgModule } from '@angular/core';
import SignaturePad from 'signature_pad';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@angular/forms';

const _c0 = ["sPad"];
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
SignatureProcessingService.ɵfac = function SignatureProcessingService_Factory(t) { return new (t || SignatureProcessingService)(ɵngcc0.ɵɵinject(ɵngcc1.HttpClient)); };
SignatureProcessingService.ɵprov = ɵɵdefineInjectable({ factory: function SignatureProcessingService_Factory() { return new SignatureProcessingService(ɵɵinject(HttpClient)); }, token: SignatureProcessingService, providedIn: "root" });
SignatureProcessingService.ctorParameters = () => [
    { type: HttpClient }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SignatureProcessingService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.HttpClient }]; }, null); })();

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
SignatureProcessingUnitComponent.ɵfac = function SignatureProcessingUnitComponent_Factory(t) { return new (t || SignatureProcessingUnitComponent)(ɵngcc0.ɵɵdirectiveInject(SignatureProcessingService)); };
SignatureProcessingUnitComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SignatureProcessingUnitComponent, selectors: [["lib-signature-processing-unit"]], viewQuery: function SignatureProcessingUnitComponent_Query(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.signaturePadElement = _t.first);
    } }, decls: 28, vars: 1, consts: [[1, "text-header"], [1, "signature-pad"], [1, "signature-pad--body"], ["width", "900", "height", "500", 2, "touch-action", "none"], ["sPad", ""], [1, "container-fluid"], [1, "row"], [1, "col-3"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "col-6"], ["enctype", "multipart/form-data"], ["name", "sign", "type", "file", "required", "", 1, "form-control", 2, "width", "25%", 3, "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["alt", "Preview", 3, "src"]], template: function SignatureProcessingUnitComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "h1", 0);
        ɵngcc0.ɵɵtext(1, "Signature Pad");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(2, "div", 1);
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵelement(4, "canvas", 3, 4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(6, "br");
        ɵngcc0.ɵɵelement(7, "br");
        ɵngcc0.ɵɵelementStart(8, "section", 5);
        ɵngcc0.ɵɵelementStart(9, "div", 6);
        ɵngcc0.ɵɵelementStart(10, "div", 7);
        ɵngcc0.ɵɵelementStart(11, "button", 8);
        ɵngcc0.ɵɵlistener("click", function SignatureProcessingUnitComponent_Template_button_click_11_listener() { return ctx.clear(); });
        ɵngcc0.ɵɵtext(12, "Clear");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(13, "button", 9);
        ɵngcc0.ɵɵlistener("click", function SignatureProcessingUnitComponent_Template_button_click_13_listener() { return ctx.savePNG(); });
        ɵngcc0.ɵɵtext(14, "PNG");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(15, "button", 10);
        ɵngcc0.ɵɵlistener("click", function SignatureProcessingUnitComponent_Template_button_click_15_listener() { return ctx.drawComplete(); });
        ɵngcc0.ɵɵtext(16, "Save");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(17, "div", 11);
        ɵngcc0.ɵɵelementStart(18, "form", 12);
        ɵngcc0.ɵɵelementStart(19, "div", 11);
        ɵngcc0.ɵɵelementStart(20, "input", 13);
        ɵngcc0.ɵɵlistener("change", function SignatureProcessingUnitComponent_Template_input_change_20_listener($event) { return ctx.selectImage($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(21, "button", 14);
        ɵngcc0.ɵɵlistener("click", function SignatureProcessingUnitComponent_Template_button_click_21_listener() { return ctx.onUpload(); });
        ɵngcc0.ɵɵtext(22, "Upload");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(23, "pre");
        ɵngcc0.ɵɵtext(24, "    ");
        ɵngcc0.ɵɵtext(25, "\n    ");
        ɵngcc0.ɵɵelement(26, "img", 15);
        ɵngcc0.ɵɵtext(27, "\n  ");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(26);
        ɵngcc0.ɵɵproperty("src", ctx.backendRes.spadu.signdata, ɵngcc0.ɵɵsanitizeUrl);
    } }, directives: [ɵngcc2.ɵangular_packages_forms_forms_ba, ɵngcc2.NgControlStatusGroup, ɵngcc2.NgForm], styles: [".signature-pad[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;font-size:10px;width:100%;height:100%;max-width:900px;border:1px solid #e8e8e8;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.27),inset 0 0 40px rgba(0,0,0,.08);border-radius:4px}.signature-pad--body[_ngcontent-%COMP%]{position:relative;flex:1;border:1px solid #f4f4f4}"] });
SignatureProcessingUnitComponent.ctorParameters = () => [
    { type: SignatureProcessingService }
];
SignatureProcessingUnitComponent.propDecorators = {
    signaturePadElement: [{ type: ViewChild, args: ['sPad', { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SignatureProcessingUnitComponent, [{
        type: Component,
        args: [{
                selector: 'lib-signature-processing-unit',
                template: "\n\n\n  <h1 class=\"text-header\">Signature Pad</h1>\n  <div class=\"signature-pad\">\n    <div class=\"signature-pad--body\">\n      <canvas #sPad width=\"900\" height=\"500\" style=\"touch-action: none;\"></canvas>\n    </div>\n  </div>\n  <br>\n  <br>\n  <section class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <button class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\n          <button class=\"btn btn-success\" (click)=\"savePNG()\">PNG</button>\n          <!-- <button class=\"btn btn-warning\" (click)=\"undo()\">Undo</button>\n          <button class=\"btn btn-info\" (click)=\"changeColor()\">Change Color</button> -->\n          <button class=\"btn btn-primary\" (click)=\"drawComplete()\">Save</button>\n        </div>\n        <div class=\"col-6\">\n         \n          <!-- <button class=\"btn btn-primary\" >JPG</button>\n          <button class=\"btn btn-secondary\" >SVG</button> -->\n        </div>\n        <form enctype=\"multipart/form-data\">\n          <div class=\"col-6\">\n            <input (change)=\"selectImage($event)\" name=\"sign\" class=\"form-control\" type=\"file\" style=\"width:25%\" required>\n          \n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onUpload()\">Upload</button>\n          </div>\n        </form>\n       \n      </div>\n  </section>\n  <pre>\n    <!-- {{backendRes.spadu.signdata}} -->\n    <img [src]=\"backendRes.spadu.signdata\" alt=\"Preview\" >\n  </pre>\n  \n      \n\n \n\n   \n\n\n\n\n\n\n\n \n\n",
                styles: [".signature-pad{position:relative;display:flex;flex-direction:column;font-size:10px;width:100%;height:100%;max-width:900px;border:1px solid #e8e8e8;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.27),inset 0 0 40px rgba(0,0,0,.08);border-radius:4px}.signature-pad--body{position:relative;flex:1;border:1px solid #f4f4f4}"]
            }]
    }], function () { return [{ type: SignatureProcessingService }]; }, { signaturePadElement: [{
            type: ViewChild,
            args: ['sPad', { static: true }]
        }] }); })();

class SignatureProcessingComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignatureProcessingComponent.ɵfac = function SignatureProcessingComponent_Factory(t) { return new (t || SignatureProcessingComponent)(); };
SignatureProcessingComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SignatureProcessingComponent, selectors: [["lib-signature-processing"]], decls: 2, vars: 0, template: function SignatureProcessingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " signature-processing works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
SignatureProcessingComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SignatureProcessingComponent, [{
        type: Component,
        args: [{
                selector: 'lib-signature-processing',
                template: `
    <p>
      signature-processing works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();

class SignatureProcessingModule {
}
SignatureProcessingModule.ɵfac = function SignatureProcessingModule_Factory(t) { return new (t || SignatureProcessingModule)(); };
SignatureProcessingModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SignatureProcessingModule });
SignatureProcessingModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ imports: [[
            BrowserModule,
            HttpClientModule,
            FormsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SignatureProcessingModule, { declarations: function () { return [SignatureProcessingComponent, SignatureProcessingUnitComponent]; }, imports: function () { return [BrowserModule,
        HttpClientModule,
        FormsModule]; }, exports: function () { return [SignatureProcessingComponent, SignatureProcessingUnitComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SignatureProcessingModule, [{
        type: NgModule,
        args: [{
                declarations: [SignatureProcessingComponent, SignatureProcessingUnitComponent],
                imports: [
                    BrowserModule,
                    HttpClientModule,
                    FormsModule
                ],
                exports: [SignatureProcessingComponent, SignatureProcessingUnitComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of signature-processing
 */

/**
 * Generated bundle index. Do not edit.
 */

export { SignatureProcessingComponent, SignatureProcessingModule, SignatureProcessingService, SignatureProcessingUnitComponent };

//# sourceMappingURL=sunnykumarsk53-signature-processing.js.map