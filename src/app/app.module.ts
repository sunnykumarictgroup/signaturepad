import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';

// import { ComponentComponent } from './component/component.component';
// import { HttpClientModule } from '@angular/common/http'
// import { FormsModule } from '@angular/forms'

import { SignatureProcessingModule } from 'signature-processing';



@NgModule({
  declarations: [
    AppComponent,
    // ComponentComponent
  ],
  imports: [
    // BrowserModule,
    // AppRoutingModule,
    // HttpClientModule,
    // FormsModule
    SignatureProcessingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
