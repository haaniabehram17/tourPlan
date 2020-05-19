import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ForgotPasswordService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAccountByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/accounts/email/${email}`);
  }
}