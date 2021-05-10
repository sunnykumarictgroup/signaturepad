import { Component, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { SignatureProcessingService } from '../signature-processing.service';
export class SignatureProcessingUnitComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLXByb2Nlc3NpbmctdW5pdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zaWduYXR1cmUtcHJvY2Vzc2luZy9zcmMvbGliL3NpZ25hdHVyZS1wcm9jZXNzaW5nLXVuaXQvc2lnbmF0dXJlLXByb2Nlc3NpbmctdW5pdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQXNCLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RixPQUFPLFlBQVksTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFTOUUsTUFBTSxPQUFPLGdDQUFnQztJQTBCM0MsWUFBb0IsT0FBb0M7UUFBcEMsWUFBTyxHQUFQLE9BQU8sQ0FBNkI7UUF2QnpELGVBQVUsR0FBUTtZQUNqQixLQUFLLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDO1NBQ25CLENBQUE7UUFDQSxpQkFBWSxHQUFRLElBQUksQ0FBQztJQW9CbUMsQ0FBQztJQW5CN0QsV0FBVyxDQUFDLEtBQVU7UUFDcEIsSUFBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBQztZQUNwQixJQUFJLENBQUMsWUFBWSxHQUFTLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO1NBQ2hEO0lBR0gsQ0FBQztJQUNELFFBQVE7UUFFTixNQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQzFCLHdEQUF3RDtRQUN4RCxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDekQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxTQUFTLENB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LENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUM3QixNQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUNELE9BQU87UUFDTCxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0IsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7WUFwSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLHloREFBeUQ7O2FBRTFEOzs7WUFQUywwQkFBMEI7OztrQ0FVakMsU0FBUyxTQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgU2lnbmF0dXJlUGFkIGZyb20gJ3NpZ25hdHVyZV9wYWQnO1xuIGltcG9ydCB7IFNpZ25hdHVyZVByb2Nlc3NpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vc2lnbmF0dXJlLXByb2Nlc3Npbmcuc2VydmljZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2lnbmF0dXJlLXByb2Nlc3NpbmctdW5pdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zaWduYXR1cmUtcHJvY2Vzc2luZy11bml0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2lnbmF0dXJlLXByb2Nlc3NpbmctdW5pdC5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBTaWduYXR1cmVQcm9jZXNzaW5nVW5pdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ3NQYWQnLCB7c3RhdGljOiB0cnVlfSkgc2lnbmF0dXJlUGFkRWxlbWVudDtcbiAgc2lnbmF0dXJlUGFkOiBhbnk7XG4gYmFja2VuZFJlczogYW55ID0ge1xuICBzcGFkdTp7c2lnbmRhdGE6Jyd9XG4gfVxuICBzZWxlY3RlZEZpbGU6IGFueSA9IG51bGw7XG4gIHNlbGVjdEltYWdlKGV2ZW50OiBhbnkpe1xuICAgIGlmKGV2ZW50LnRhcmdldC52YWx1ZSl7XG4gICAgICB0aGlzLnNlbGVjdGVkRmlsZSA9IDxGaWxlPmV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIH1cbiAgXG4gICBcbiAgfVxuICBvblVwbG9hZCgpIHtcblxuICAgIGNvbnN0IGZkID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RlZEZpbGUubmFtZSwnaGhoaGhoaGhoaGhoaGgnKTtcbiAgICBmZC5hcHBlbmQoJ3NpZ24nLCB0aGlzLnNlbGVjdGVkRmlsZSx0aGlzLnNlbGVjdGVkRmlsZS5uYW1lKVxuICAgICAgdGhpcy5zZXJ2aWNlLmluc2VydFVwbG9hZFNpZ25hdHVyZShmZCkuc3Vic2NyaWJlKChyZXN1bHQ6YW55KT0+e1xuICAgICAgICB0aGlzLmJhY2tlbmRSZXM9cmVzdWx0O1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgIH0pXG5cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZSA6IFNpZ25hdHVyZVByb2Nlc3NpbmdTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNpZ25hdHVyZVBhZCA9IG5ldyBTaWduYXR1cmVQYWQodGhpcy5zaWduYXR1cmVQYWRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQuY2xlYXIoKTtcbiAgfVxuICB1bmRvKCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGEoKTtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgZGF0YS5wb3AoKTsgLy8gcmVtb3ZlIHRoZSBsYXN0IGRvdCBvciBsaW5lXG4gICAgICB0aGlzLnNpZ25hdHVyZVBhZC5mcm9tRGF0YShkYXRhKTtcbiAgICB9XG4gIH1cbiAgY2hhbmdlQ29sb3IoKSB7XG4gICAgY29uc3QgciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NSk7XG4gICAgY29uc3QgZyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NSk7XG4gICAgY29uc3QgYiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDI1NSk7XG4gICAgY29uc3QgY29sb3IgPSAncmdiKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnKSc7XG4gICAgdGhpcy5zaWduYXR1cmVQYWQucGVuQ29sb3IgPSBjb2xvcjtcbiAgfVxuXG4gIGRyYXdDb21wbGV0ZSgpIHtcbiAgICBcbiAgICBjb25zdCBiYXNlNjQgPSB0aGlzLnNpZ25hdHVyZVBhZC50b0RhdGFVUkwoJ2ltYWdlL3BuZycsMC41KTtcbiAgICBjb25zb2xlLmxvZyhiYXNlNjQpO1xuICAgIGNvbnN0IGJsb2IgPSB0aGlzLmJhc2U2NHRvQmxvYihiYXNlNjQpO1xuICAgIHRoaXMuc2VydmljZS5pbnNlcnRTaWduYXR1cmUoe3NpZ25kYXRhOmJhc2U2NH0pLnN1YnNjcmliZShyZXN1bHQ9PntcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICB9KVxuICAgIC8vY29uc29sZS5sb2coYmxvYik7XG4gICBcbiAgfVxuICBiYXNlNjR0b0Jsb2IoYmFzZTY0KSB7XG4gICAgY29uc3QgYnl0ZXN0cmluZyA9IGF0b2IoYmFzZTY0LnNwbGl0KCcsJylbMV0pO1xuICAgIGNvbnN0IG1pbWVTdHJpbmcgPSBiYXNlNjQuc3BsaXQoJywnKVswXS5zcGxpdCgnOicpWzFdLnNwbGl0KCc6JylbMF07XG4gICAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoYnl0ZXN0cmluZy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGk9MDsgaTxieXRlc3RyaW5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICBieXRlTnVtYmVyc1tpXSA9IGJ5dGVzdHJpbmcuY2hhckF0KGkpO1xuICAgIH1cbiAgICBjb25zdCBpYSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcbiAgICByZXR1cm4gbmV3IEJsb2IoW2lhXSwge3R5cGU6IG1pbWVTdHJpbmd9KTtcbiAgfVxuICBkb3dubG9hZChkYXRhVVJMLCBmaWxlbmFtZSkge1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1NhZmFyaScpID4gLTEgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEpIHtcbiAgICAgIHdpbmRvdy5vcGVuKGRhdGFVUkwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBibG9iID0gdGhpcy5kYXRhVVJMVG9CbG9iKGRhdGFVUkwpO1xuICAgICAgY29uc3QgdXJsID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgYS5kb3dubG9hZCA9IGZpbGVuYW1lO1xuXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGEpO1xuICAgICAgYS5jbGljaygpO1xuXG4gICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xuICAgIH1cbiAgfVxuICBkYXRhVVJMVG9CbG9iKGRhdGFVUkwpIHtcbiAgICAvLyBDb2RlIHRha2VuIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ViaWRlbC9maWxlci5qc1xuICAgIGNvbnN0IHBhcnRzID0gZGF0YVVSTC5zcGxpdCgnO2Jhc2U2NCwnKTtcbiAgICBjb25zdCBjb250ZW50VHlwZSA9IHBhcnRzWzBdLnNwbGl0KCc6JylbMV07XG4gICAgY29uc3QgcmF3ID0gd2luZG93LmF0b2IocGFydHNbMV0pO1xuICAgIGNvbnN0IHJhd0xlbmd0aCA9IHJhdy5sZW5ndGg7XG4gICAgY29uc3QgdUludDhBcnJheSA9IG5ldyBVaW50OEFycmF5KHJhd0xlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYXdMZW5ndGg7ICsraSkge1xuICAgICAgdUludDhBcnJheVtpXSA9IHJhdy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEJsb2IoW3VJbnQ4QXJyYXldLCB7IHR5cGU6IGNvbnRlbnRUeXBlIH0pO1xuICB9XG4gIHNhdmVQTkcoKSB7XG4gICAgaWYgKHRoaXMuc2lnbmF0dXJlUGFkLmlzRW1wdHkoKSkge1xuICAgICAgYWxlcnQoJ1BsZWFzZSBwcm92aWRlIGEgc2lnbmF0dXJlIGZpcnN0LicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXRhVVJMID0gdGhpcy5zaWduYXR1cmVQYWQudG9EYXRhVVJMKCk7XG4gICAgICB0aGlzLmRvd25sb2FkKGRhdGFVUkwsICdzaWduYXR1cmUucG5nJyk7XG4gICAgfVxuICB9XG4gIFxuXG5cbn0iXX0=