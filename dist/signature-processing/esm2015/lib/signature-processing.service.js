import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
const url = 'http://localhost:9000/';
export class SignatureProcessingService {
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
SignatureProcessingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SignatureProcessingService_Factory() { return new SignatureProcessingService(i0.ɵɵinject(i1.HttpClient)); }, token: SignatureProcessingService, providedIn: "root" });
SignatureProcessingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
SignatureProcessingService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbmF0dXJlLXByb2Nlc3Npbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3NpZ25hdHVyZS1wcm9jZXNzaW5nL3NyYy9saWIvc2lnbmF0dXJlLXByb2Nlc3Npbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxzQkFBc0IsQ0FBQTs7O0FBRTVELE1BQU0sR0FBRyxHQUFHLHdCQUF3QixDQUFDO0FBS3JDLE1BQU0sT0FBTywwQkFBMEI7SUFFckMsWUFBb0IsSUFBZTtRQUFmLFNBQUksR0FBSixJQUFJLENBQVc7SUFBSSxDQUFDO0lBRXhDLGVBQWUsQ0FBQyxNQUFXO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7UUFFbkIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBRSxHQUFHLEdBQUcsMEJBQTBCLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELHFCQUFxQixDQUFDLE1BQVc7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUVuQixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFFLEdBQUcsR0FBRyxRQUFRLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7OztZQWpCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJ1xuXG5jb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo5MDAwLyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZVByb2Nlc3NpbmdTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCkgeyB9XG5cbiAgaW5zZXJ0U2lnbmF0dXJlKHBhcmFtczogYW55KSB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zKVxuICAgXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCB1cmwgKyAnYXBpL3VzZXIvaW5zZXJ0U2lnbmF0dXJlJyxwYXJhbXMpO1xuICB9XG5cbiAgaW5zZXJ0VXBsb2FkU2lnbmF0dXJlKHBhcmFtczogYW55KSB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zKVxuICAgXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCB1cmwgKyAndXBsb2FkJyxwYXJhbXMpO1xuICB9XG59XG4iXX0=