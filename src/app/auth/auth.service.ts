import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  clear(): void {
    localStorage.clear();
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean {
    return false;
  }

  getPayload(): any {
    return JSON.parse(localStorage.getItem('payload'));
  }

  authorize(clientId: string) {
    return this.http.post<{
      code: string,
      redirect_uri: string
    }>(
      this.apiUrl + '/auth',
      {
        client_id: clientId
      }
    ).pipe(tap(res => {
      console.log();
    }))
  }

  login(userName: string, password: string) {
    return this.http.post<{ token: string, expiresIn: string, name: string, userId: string }>(
      this.apiUrl + '/auth',
      {
        userName, password,
      }
    ).pipe(tap(res => {
      const payload = JSON.stringify(decode(res.token));
      localStorage.setItem('token', res.token);
      localStorage.setItem('payload', payload);
      return true;
    }));
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  decode() {
    return decode(localStorage.getItem('token'));
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
