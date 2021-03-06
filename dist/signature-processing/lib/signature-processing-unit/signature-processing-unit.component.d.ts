import { OnInit } from '@angular/core';
import { SignatureProcessingService } from '../signature-processing.service';
import * as ɵngcc0 from '@angular/core';
export declare class SignatureProcessingUnitComponent implements OnInit {
    private service;
    signaturePadElement: any;
    signaturePad: any;
    backendRes: any;
    selectedFile: any;
    selectImage(event: any): void;
    onUpload(): void;
    constructor(service: SignatureProcessingService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    clear(): void;
    undo(): void;
    changeColor(): void;
    drawComplete(): void;
    base64toBlob(base64: any): Blob;
    download(dataURL: any, filename: any): void;
    dataURLToBlob(dataURL: any): Blob;
    savePNG(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SignatureProcessingUnitComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SignatureProcessingUnitComponent, "lib-signature-processing-unit", never, {}, {}, never, never>;
}

//# sourceMappingURL=signature-processing-unit.component.d.ts.map