import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http'

const url = 'http://localhost:9000/';

@Injectable({
  providedIn: 'root'
})
export class SignatureServiceService {

  constructor(private http:HttpClient) { }

  insertSignature(params: any) {
    console.log(params)
   
    return this.http.post( url + 'api/user/insertSignature',params);
  }

  insertUploadSignature(params: any) {
    console.log(params)
   
    return this.http.post( url + 'upload',params);
  }
}
