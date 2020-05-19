import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RechnungFormService {
  private baseURL: string = environment.apiBaseUrl;
  private apiFunction = 'getRechnungsadresseFromEmail?Email=';

  constructor(private http: HttpClient) { }

  getBillingAddressDetails(): Observable <any>{
    const url = this.baseURL + this.apiFunction;
    // console.log('in BillingAddressFormService, url =', url);
    return this.http.get(url);
  }
}
