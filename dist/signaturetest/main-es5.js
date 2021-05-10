(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Sunny Kumar\Desktop\signaturepad\signaturepad\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "MO1O":
    /*!*********************************************************************************!*\
      !*** ./dist/signature-processing/__ivy_ngcc__/fesm2015/signature-processing.js ***!
      \*********************************************************************************/

    /*! exports provided: SignatureProcessingComponent, SignatureProcessingModule, SignatureProcessingService, SignatureProcessingUnitComponent */

    /***/
    function MO1O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureProcessingComponent", function () {
        return SignatureProcessingComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureProcessingModule", function () {
        return SignatureProcessingModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureProcessingService", function () {
        return SignatureProcessingService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignatureProcessingUnitComponent", function () {
        return SignatureProcessingUnitComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var signature_pad__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! signature_pad */
      "kOL3");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var _c0 = ["sPad"];
      var url = 'http://localhost:9000/';

      var SignatureProcessingService = /*#__PURE__*/function () {
        function SignatureProcessingService(http) {
          _classCallCheck(this, SignatureProcessingService);

          this.http = http;
        }

        _createClass(SignatureProcessingService, [{
          key: "insertSignature",
          value: function insertSignature(params) {
            console.log(params);
            return this.http.post(url + 'api/user/insertSignature', params);
          }
        }, {
          key: "insertUploadSignature",
          value: function insertUploadSignature(params) {
            console.log(params);
            return this.http.post(url + 'upload', params);
          }
        }]);

        return SignatureProcessingService;
      }();

      SignatureProcessingService.ɵfac = function SignatureProcessingService_Factory(t) {
        return new (t || SignatureProcessingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      SignatureProcessingService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
        factory: function SignatureProcessingService_Factory() {
          return new SignatureProcessingService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
        },
        token: SignatureProcessingService,
        providedIn: "root"
      });

      SignatureProcessingService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignatureProcessingService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();

      var SignatureProcessingUnitComponent = /*#__PURE__*/function () {
        function SignatureProcessingUnitComponent(service) {
          _classCallCheck(this, SignatureProcessingUnitComponent);

          this.service = service;
          this.backendRes = {
            spadu: {
              signdata: ''
            }
          };
          this.selectedFile = null;
        }

        _createClass(SignatureProcessingUnitComponent, [{
          key: "selectImage",
          value: function selectImage(event) {
            if (event.target.value) {
              this.selectedFile = event.target.files[0];
            }
          }
        }, {
          key: "onUpload",
          value: function onUpload() {
            var _this = this;

            var fd = new FormData(); // console.log(this.selectedFile.name,'hhhhhhhhhhhhhh');

            fd.append('sign', this.selectedFile, this.selectedFile.name);
            this.service.insertUploadSignature(fd).subscribe(function (result) {
              _this.backendRes = result;
              console.log(result);
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.signaturePad = new signature_pad__WEBPACK_IMPORTED_MODULE_1__["default"](this.signaturePadElement.nativeElement);
          }
        }, {
          key: "clear",
          value: function clear() {
            this.signaturePad.clear();
          }
        }, {
          key: "undo",
          value: function undo() {
            var data = this.signaturePad.toData();

            if (data) {
              data.pop(); // remove the last dot or line

              this.signaturePad.fromData(data);
            }
          }
        }, {
          key: "changeColor",
          value: function changeColor() {
            var r = Math.round(Math.random() * 255);
            var g = Math.round(Math.random() * 255);
            var b = Math.round(Math.random() * 255);
            var color = 'rgb(' + r + ',' + g + ',' + b + ')';
            this.signaturePad.penColor = color;
          }
        }, {
          key: "drawComplete",
          value: function drawComplete() {
            var base64 = this.signaturePad.toDataURL('image/png', 0.5);
            console.log(base64);
            var blob = this.base64toBlob(base64);
            this.service.insertSignature({
              signdata: base64
            }).subscribe(function (result) {
              console.log(result);
            }); //console.log(blob);
          }
        }, {
          key: "base64toBlob",
          value: function base64toBlob(base64) {
            var bytestring = atob(base64.split(',')[1]);
            var mimeString = base64.split(',')[0].split(':')[1].split(':')[0];
            var byteNumbers = new Array(bytestring.length);

            for (var i = 0; i < bytestring.length; i++) {
              byteNumbers[i] = bytestring.charAt(i);
            }

            var ia = new Uint8Array(byteNumbers);
            return new Blob([ia], {
              type: mimeString
            });
          }
        }, {
          key: "download",
          value: function download(dataURL, filename) {
            if (navigator.userAgent.indexOf('Safari') > -1 && navigator.userAgent.indexOf('Chrome') === -1) {
              window.open(dataURL);
            } else {
              var blob = this.dataURLToBlob(dataURL);

              var _url = window.URL.createObjectURL(blob);

              var a = document.createElement('a');
              a.href = _url;
              a.download = filename;
              document.body.appendChild(a);
              a.click();
              window.URL.revokeObjectURL(_url);
            }
          }
        }, {
          key: "dataURLToBlob",
          value: function dataURLToBlob(dataURL) {
            // Code taken from https://github.com/ebidel/filer.js
            var parts = dataURL.split(';base64,');
            var contentType = parts[0].split(':')[1];
            var raw = window.atob(parts[1]);
            var rawLength = raw.length;
            var uInt8Array = new Uint8Array(rawLength);

            for (var i = 0; i < rawLength; ++i) {
              uInt8Array[i] = raw.charCodeAt(i);
            }

            return new Blob([uInt8Array], {
              type: contentType
            });
          }
        }, {
          key: "savePNG",
          value: function savePNG() {
            if (this.signaturePad.isEmpty()) {
              alert('Please provide a signature first.');
            } else {
              var dataURL = this.signaturePad.toDataURL();
              this.download(dataURL, 'signature.png');
            }
          }
        }]);

        return SignatureProcessingUnitComponent;
      }();

      SignatureProcessingUnitComponent.ɵfac = function SignatureProcessingUnitComponent_Factory(t) {
        return new (t || SignatureProcessingUnitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](SignatureProcessingService));
      };

      SignatureProcessingUnitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignatureProcessingUnitComponent,
        selectors: [["lib-signature-processing-unit"]],
        viewQuery: function SignatureProcessingUnitComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 3);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePadElement = _t.first);
          }
        },
        decls: 28,
        vars: 1,
        consts: [[1, "text-header"], [1, "signature-pad"], [1, "signature-pad--body"], ["width", "900", "height", "500", 2, "touch-action", "none"], ["sPad", ""], [1, "container-fluid"], [1, "row"], [1, "col-3"], [1, "btn", "btn-danger", 3, "click"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-primary", 3, "click"], [1, "col-6"], ["enctype", "multipart/form-data"], ["name", "sign", "type", "file", "required", "", 1, "form-control", 2, "width", "25%", 3, "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["alt", "Preview", 3, "src"]],
        template: function SignatureProcessingUnitComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Signature Pad");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "canvas", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureProcessingUnitComponent_Template_button_click_11_listener() {
              return ctx.clear();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Clear");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureProcessingUnitComponent_Template_button_click_13_listener() {
              return ctx.savePNG();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "PNG");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureProcessingUnitComponent_Template_button_click_15_listener() {
              return ctx.drawComplete();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "form", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SignatureProcessingUnitComponent_Template_input_change_20_listener($event) {
              return ctx.selectImage($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignatureProcessingUnitComponent_Template_button_click_21_listener() {
              return ctx.onUpload();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "pre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n    ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n  ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.backendRes.spadu.signdata, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"]],
        styles: [".signature-pad[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;font-size:10px;width:100%;height:100%;max-width:900px;border:1px solid #e8e8e8;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.27),inset 0 0 40px rgba(0,0,0,.08);border-radius:4px}.signature-pad--body[_ngcontent-%COMP%]{position:relative;flex:1;border:1px solid #f4f4f4}"]
      });

      SignatureProcessingUnitComponent.ctorParameters = function () {
        return [{
          type: SignatureProcessingService
        }];
      };

      SignatureProcessingUnitComponent.propDecorators = {
        signaturePadElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['sPad', {
            "static": true
          }]
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignatureProcessingUnitComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'lib-signature-processing-unit',
            template: "\n\n\n  <h1 class=\"text-header\">Signature Pad</h1>\n  <div class=\"signature-pad\">\n    <div class=\"signature-pad--body\">\n      <canvas #sPad width=\"900\" height=\"500\" style=\"touch-action: none;\"></canvas>\n    </div>\n  </div>\n  <br>\n  <br>\n  <section class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-3\">\n          <button class=\"btn btn-danger\" (click)=\"clear()\">Clear</button>\n          <button class=\"btn btn-success\" (click)=\"savePNG()\">PNG</button>\n          <!-- <button class=\"btn btn-warning\" (click)=\"undo()\">Undo</button>\n          <button class=\"btn btn-info\" (click)=\"changeColor()\">Change Color</button> -->\n          <button class=\"btn btn-primary\" (click)=\"drawComplete()\">Save</button>\n        </div>\n        <div class=\"col-6\">\n         \n          <!-- <button class=\"btn btn-primary\" >JPG</button>\n          <button class=\"btn btn-secondary\" >SVG</button> -->\n        </div>\n        <form enctype=\"multipart/form-data\">\n          <div class=\"col-6\">\n            <input (change)=\"selectImage($event)\" name=\"sign\" class=\"form-control\" type=\"file\" style=\"width:25%\" required>\n          \n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"onUpload()\">Upload</button>\n          </div>\n        </form>\n       \n      </div>\n  </section>\n  <pre>\n    <!-- {{backendRes.spadu.signdata}} -->\n    <img [src]=\"backendRes.spadu.signdata\" alt=\"Preview\" >\n  </pre>\n  \n      \n\n \n\n   \n\n\n\n\n\n\n\n \n\n",
            styles: [".signature-pad{position:relative;display:flex;flex-direction:column;font-size:10px;width:100%;height:100%;max-width:900px;border:1px solid #e8e8e8;background-color:#fff;box-shadow:0 1px 4px rgba(0,0,0,.27),inset 0 0 40px rgba(0,0,0,.08);border-radius:4px}.signature-pad--body{position:relative;flex:1;border:1px solid #f4f4f4}"]
          }]
        }], function () {
          return [{
            type: SignatureProcessingService
          }];
        }, {
          signaturePadElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['sPad', {
              "static": true
            }]
          }]
        });
      })();

      var SignatureProcessingComponent = /*#__PURE__*/function () {
        function SignatureProcessingComponent() {
          _classCallCheck(this, SignatureProcessingComponent);
        }

        _createClass(SignatureProcessingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return SignatureProcessingComponent;
      }();

      SignatureProcessingComponent.ɵfac = function SignatureProcessingComponent_Factory(t) {
        return new (t || SignatureProcessingComponent)();
      };

      SignatureProcessingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SignatureProcessingComponent,
        selectors: [["lib-signature-processing"]],
        decls: 2,
        vars: 0,
        template: function SignatureProcessingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " signature-processing works! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });

      SignatureProcessingComponent.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignatureProcessingComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'lib-signature-processing',
            template: "\n    <p>\n      signature-processing works!\n    </p>\n  "
          }]
        }], function () {
          return [];
        }, null);
      })();

      var SignatureProcessingModule = function SignatureProcessingModule() {
        _classCallCheck(this, SignatureProcessingModule);
      };

      SignatureProcessingModule.ɵfac = function SignatureProcessingModule_Factory(t) {
        return new (t || SignatureProcessingModule)();
      };

      SignatureProcessingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SignatureProcessingModule
      });
      SignatureProcessingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SignatureProcessingModule, {
          declarations: function declarations() {
            return [SignatureProcessingComponent, SignatureProcessingUnitComponent];
          },
          imports: function imports() {
            return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]];
          },
          exports: function exports() {
            return [SignatureProcessingComponent, SignatureProcessingUnitComponent];
          }
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignatureProcessingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [SignatureProcessingComponent, SignatureProcessingUnitComponent],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            exports: [SignatureProcessingComponent, SignatureProcessingUnitComponent]
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of signature-processing
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var signature_processing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! signature-processing */
      "MO1O");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'signaturetest';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "lib-signature-processing-unit");
          }
        },
        directives: [signature_processing__WEBPACK_IMPORTED_MODULE_1__["SignatureProcessingUnitComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var signature_processing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! signature-processing */
      "MO1O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL"); // import { BrowserModule } from '@angular/platform-browser';
      // import { AppRoutingModule } from './app-routing.module';
      // import { ComponentComponent } from './component/component.component';
      // import { HttpClientModule } from '@angular/common/http'
      // import { FormsModule } from '@angular/forms'


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[// BrowserModule,
        // AppRoutingModule,
        // HttpClientModule,
        // FormsModule
        signature_processing__WEBPACK_IMPORTED_MODULE_1__["SignatureProcessingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"]],
          imports: [// BrowserModule,
          // AppRoutingModule,
          // HttpClientModule,
          // FormsModule
          signature_processing__WEBPACK_IMPORTED_MODULE_1__["SignatureProcessingModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map