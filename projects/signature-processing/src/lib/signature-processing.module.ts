import { NgModule } from '@angular/core';
import { SignatureProcessingComponent } from './signature-processing.component';
import { SignatureProcessingUnitComponent } from './signature-processing-unit/signature-processing-unit.component';



import { BrowserModule } from '@angular/platform-browser';


import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [SignatureProcessingComponent, SignatureProcessingUnitComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  exports: [SignatureProcessingComponent, SignatureProcessingUnitComponent]
})
export class SignatureProcessingModule { }
