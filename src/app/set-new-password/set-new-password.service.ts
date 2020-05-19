import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SetNewPasswordService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  setNewPassword(values): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/accounts/update-password`, values);
  }
}