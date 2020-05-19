import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationHanlderService {
  constructor() { }
  all_Locations: any;
  newUpdatedLocations: any;
  private all_Locations_api = new Subject<any>();
  private subject = new Subject<any>();
  private optimizedLocationsSubject = new Subject<any>();
  private csvLocationSubject = new Subject<any>();
  private selectedLocations = new Subject<any>();
  private mapSearchedLocations = new Subject<any>();
  sendMessage(data: any) {
    this.subject.next({ locations: data });
  }
  set(item: any){
    this.all_Locations = item;
  }
  setUpdatedLocations(item: any){
    this.newUpdatedLocations = item;
  }

  getUpdatedLocations(){
    return this.newUpdatedLocations;
  }
  get(){
    return this.all_Locations;
  }
  setSelectedLocations(locations: any){
    this.selectedLocations.next(locations);
  }
  getSelectedLocations(): Observable<any>{
    return this.selectedLocations.asObservable();
  }
  getMessage(): Observable<any>{
    return this.subject.asObservable();
  }
  sendOptimizedLocation(locations: any){
    // console.log("locations ins send optimzed",locations)
    this.optimizedLocationsSubject.next({ data: locations });
  }
  getOptimizedLocation(): Observable<any>{
    return this.optimizedLocationsSubject.asObservable();
  }
  setLocationsofAPI(location: any){
    this.all_Locations_api.next({data: location});
  }
  getLocationsofAPI(){
    return this.all_Locations_api.asObservable();
  }
  setCsvFileLocations(csvdata: any){
    this.csvLocationSubject.next({data: csvdata});
  }
  getCsvLocations(): Observable<any>{
    return this.csvLocationSubject.asObservable();
  }
  setmapSearchedLocations(locations){
    this.mapSearchedLocations.next(locations);
  }
  getmapSearchedLocations(){
    return this.mapSearchedLocations.asObservable();
  }
}
