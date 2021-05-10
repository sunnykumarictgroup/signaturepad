(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('signature_pad'), require('@angular/common/http'), require('@angular/platform-browser'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@sunnykumarsk53/signature-processing', ['exports', '@angular/core', 'signature_pad', '@angular/common/http', '@angular/platform-browser', '@angular/forms'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.sunnykumarsk53 = global.sunnykumarsk53 || {}, global.sunnykumarsk53['signature-processing'] = {}), global.ng.core, global.signature_pad, global.ng.common.http, global.ng.platformBrowser, global.ng.forms));
}(this, (function (exports, i0, SignaturePad, i1, platformBrowser, forms) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var SignaturePad__default = /*#__PURE__*/_interopDefaultLegacy(SignaturePad);

    var url = 'http://localhost:9000/';
    var SignatureProcessingService = /** @class */ (function () {
        function SignatureProcessingService(http) {
            this.http = http;
        }
        SignatureProcessingService.prototype.insertSignature = function (params) {
            console.log(params);
            return this.http.post(url + 'api/user/insertSignature', params);
        };
        SignatureProcessingService.prototype.insertUploadSignature = function (params) {
            console.log(params);
            return this.http.post(url + 'upload', params);
        };
        return SignatureProcessingService;
    }());
    SignatureProcessingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SignatureProcessingService_Factory() { return new SignatureProcessingService(i0.ɵɵinject(i1.HttpClient)); }, token: SignatureProcessingService, providedIn: "root" });
    SignatureProcessingService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    SignatureProcessingService.ctorParameters = function () { return [
        { type: i1.HttpClient }
    ]; };

    var SignatureProcessingUnitComponent = /** @class */ (function () {
        function SignatureProcessingUnitComponent(service) {
            this.service = service;
            this.backendRes = {
                spadu: { signdata: '' }
            };
            this.selectedFile = null;
        }
        SignatureProcessingUnitComponent.prototype.selectImage = function (event) {
            if (event.target.value) {
                this.selectedFile = event.target.files[0];
            }
        };
        SignatureProcessingUnitComponent.prototype.onUpload = function () {
            var _this = this;
            var fd = new FormData();
            // console.log(this.selectedFile.name,'hhhhhhhhhhhhhh');
            fd.append('sign', this.selectedFile, this.selectedFile.name);
            this.service.insertUploadSignature(fd).subscribe(function (result) {
                _this.backendRes = result;
                console.log(result);
            });
        };
        SignatureProcessingUnitComponent.prototype.ngOnInit = function () {
        };
        SignatureProcessingUnitComponent.prototype.ngAfterViewInit = function () {
            this.signaturePad = new SignaturePad__default['default'](this.signaturePadElement.nativeElement);
        };
        SignatureProcessingUnitComponent.prototype.clear = function () {
            this.signaturePad.clear();
        };
        SignatureProcessingUnitComponent.prototype.undo = function () {
            var data = this.signaturePad.toData();
            if (data) {
                data.pop(); // remove the last dot or line
                this.signaturePad.fromData(data);
            }
        };
        SignatureProcessingUnitComponent.prototype.changeColor = function () {
            var r = Math.round(Math.random() * 255);
            var g = Math.round(Math.random() * 255);
            var b = Math.round(Math.random() * 255);
            var color = 'rgb(' + r + ',' + g + ',' + b + ')';
            this.signaturePad.penColor = color;
        };
        SignatureProcessingUnitComponent.prototype.drawComplete = function () {
            var base64 = this.signaturePad.toDataURL('image/png', 0.5);
            console.log(base64);
            var blob = this.base64toBlob(base64);
            this.service.insertSignature({ signdata: base64 }).subscribe(function (result) {
                console.log(result);
            });
            //console.log(blob);
        };
        SignatureProcessingUnitComponent.prototype.base64toBlob = function (base64) {
            var bytestring = atob(base64.split(',')[1]);
            var mimeString = base64.split(',')[0].split(':')[1].split(':')[0];
            var byteNumbers = new Array(bytestring.length);
            for (var i = 0; i < bytestring.length; i++) {
                byteNumbers[i] = bytestring.charAt(i);
            }
            var ia = new Uint8Array(byteNumbers);
            return new Blob([ia], { type: mimeString });
        };
        SignatureProcessingUnitComponent.prototype.download = function (dataURL, filename) {
            if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
                window.open(dataURL);
            }
            else {
                var blob = this.dataURLToBlob(dataURL);
                var url = window.URL.createObjectURL(blob);
                var a = document.createElement('a');
                a.href = url;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            }
        };
        SignatureProcessingUnitComponent.prototype.dataURLToBlob = function (dataURL) {
            // Code taken from https://github.com/ebidel/filer.js
            var parts = dataURL.split(';base64,');
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;
            var uInt8Array = new Uint8Array(rawLength);
            for (var i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], { type: contentType });
        };
        SignatureProcessingUnitComponent.prototype.savePNG = function () {
            if (this.signaturePad.isEmpty()) {
                alert('Please provide a signature first.');
            }
            else {
                var dataURL = this.signaturePad.toDataURL();
                this.download(dataURL, 'signature.png');
            }
        };
        return SignatureProcessingUnitComponent;
    }());
    SignatureProcessingUnitComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-signature-processing-unit',
                    template: "\n\n\n  <h1 class=\"text-header\">Signature Pad</h1>\n  <div class=\"signature-pad\">\n    <div class=\"signature-pad--body\">\n      <canvas #sPad width=\"900\" height=\"500\" style=\"touch-action: none;\"></canvas>\n    </div>\n  </div>\n  <br>\n  <br>\n  <section class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <button class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\n          <button class=\"btn btn-success\" (click)=\"savePNG()\">PNG</button>\n          <!-- <button class=\"btn btn-warning\" (click)=\"undo()\">Undo</button>\n          <button class=\"btn btn-info\" (click)=\"changeColor()\">Change Color</button> -->\n          <button class=\"btn btn-primary\" (click)=\"drawComplete()\">Save</button>\n        </div>\n        <div class=\"col-6\">\n         \n          <!-- <button class=\"btn btn-primary\" >JPG</button>\n          <button class=\"btn btn-secondary\" >SVG</button> -->\n        </div>\n        <form enctype=\"multipart/form-data\">\n          <div class=\"col-6\">\n            <input (change)=\"selectImage($event)\" name=\"sign\" class=\"form-control\" type=\"file\" style=\"width:25%\" required>\n          \n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onUpload()\">Upload</button>\n          </div>\n        </form>\n       \n      </div>\n  </section>\n  <pre>\n    <!-- {{backendRes.spadu.signdata}} -->\n    <img [src]=\"backendRes.spadu.signdata\" alt=\"Preview\" >\n  </pre>\n  \n      \n\n \n\n   \n\n\n\n\n\n\n\n \n\n",
                    styles: [".signature-pad{position:relative;display:flex;flex-direction:column;font-size:10px;width:100%;height:100%;max-width:900px;border:1px solid #e8e8e8;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.27),inset 0 0 40px rgba(0,0,0,.08);border-radius:4px}.signature-pad--body{position:relative;flex:1;border:1px solid #f4f4f4}"]
                },] }
    ];
    SignatureProcessingUnitComponent.ctorParameters = function () { return [
        { type: SignatureProcessingService }
    ]; };
    SignatureProcessingUnitComponent.propDecorators = {
        signaturePadElement: [{ type: i0.ViewChild, args: ['sPad', { static: true },] }]
    };

    var SignatureProcessingComponent = /** @class */ (function () {
        function SignatureProcessingComponent() {
        }
        SignatureProcessingComponent.prototype.ngOnInit = function () {
        };
        return SignatureProcessingComponent;
    }());
    SignatureProcessingComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-signature-processing',
                    template: "\n    <p>\n      signature-processing works!\n    </p>\n  "
                },] }
    ];
    SignatureProcessingComponent.ctorParameters = function () { return []; };

    var SignatureProcessingModule = /** @class */ (function () {
        function SignatureProcessingModule() {
        }
        return SignatureProcessingModule;
    }());
    SignatureProcessingModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [SignatureProcessingComponent, SignatureProcessingUnitComponent],
                    imports: [
                        platformBrowser.BrowserModule,
                        i1.HttpClientModule,
                        forms.FormsModule
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

    exports.SignatureProcessingComponent = SignatureProcessingComponent;
    exports.SignatureProcessingModule = SignatureProcessingModule;
    exports.SignatureProcessingService = SignatureProcessingService;
    exports.SignatureProcessingUnitComponent = SignatureProcessingUnitComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sunnykumarsk53-signature-processing.umd.js.map
