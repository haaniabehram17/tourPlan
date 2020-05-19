import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Location } from './location.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getLocations(): Observable<Location[]> {
    const params = {};
    return this.http.get<Location[]>(`${this.apiUrl}/locations`, { params });
  }

  getLocationById(id: string): Observable<Location> {
    return this.http.get<Location>(`${this.apiUrl}/locations/${id}`);
  }

  createLocation(values): Observable<Location> {
    return this.http.post<Location>(`${this.apiUrl}/locations`, values);
  }

  updateLocationById(id: string, values): Observable<Location> {
    return this.http.patch<Location>(`${this.apiUrl}/locations/${id}`, values);
  }

  deleteLocation(id: string) {
    return this.http.delete(`${this.apiUrl}/locations/${id}`);
  }

  deleteContact(id: string) {
    return this.http.delete(`${this.apiUrl}/contacts/${id}`);
  }
}
