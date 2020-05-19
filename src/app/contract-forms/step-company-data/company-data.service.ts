import { Injectable  } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralContactAddressService{

  private baseURL: string = environment.apiBaseUrl;
  private apiFunction = 'getProfileDetailsFromEmail?Email=';

  constructor(private http: HttpClient) { }

  getCustomer(): Observable <any>{
      const url = this.baseURL + this.apiFunction;
      // console.log("in GeneralContactAddressService, url =", url);
      return this.http.get(url);
  }
}
