import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5000',
      'Access-Control-Allow-Methods' : 'POST,GET,OPTIONS,PUT,DELETE',
      'Access-Control-Allow-Headers' : 'Content-Type'
    })
  };
  post(data): Observable<any> {
    console.log('coming here 1');
    return this.http.post('http://127.0.0.1:5000/strict', data ,{headers:{'Content-Type' : 'application/x-www-form-urlencoded'}});
  }
}
