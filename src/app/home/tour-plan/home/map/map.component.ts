import {ChangeDetectorRef, Component, ElementRef, Input, NgZone, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {LocationHanlderService} from '../../services/locationHandler/location-hanlder.service';
import {GeoLocationsService} from '../../services/geocodeLocations/geo-locations.service';
import {FormControl} from '@angular/forms';
import {MapsAPILoader} from '@agm/core';
import {GeocoderRequest} from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})
export class MapComponent implements OnInit, OnDestroy {
  @Input() tabChanged: Observable<void>;  // for showing agm directions
  tabChangeDetected: Subscription;
  LocationsOnAddBtn: Subscription;
  locationsFromApi: Subscription;
  selectedLocations: Subscription;
  optimizedLocations: Subscription;
  csvLocations: Subscription;
  markersList: any[] = [];
  list: any[] = [];
  csvLocationsArray: any[] = [];
  pos0: any;
  pos1: any;
  messages: any[] = [];
  waypoints1 = [];
  markers: any[] = [];
  clickMessage = false;
  // latitude = 50.356548;
  // longitude = 7.599420;
  origin = '';
  destination = '';
  loading = false;
  showMarker = true;
  waypoints: any [] = [];
  resultsMap: any;
  public latitude: number;
  public longitude: number;
  public zoom: number;
  constructor(public locationsService: LocationHanlderService,
              public geocodeService: GeoLocationsService,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone,
              public ref: ChangeDetectorRef) {

  }
  mapReady(event) {
    console.log('mapeventfirstload', event);
    // position when map is loaded
    this.setCurrentPosition();
    // reverse geocoding
    // this.getAddress(this.latitude, this.longitude);
  }
  ngOnInit(): void {
    // Map markers from slected location component
    this.LocationsOnAddBtn = this.locationsService.getmapSearchedLocations()
      .subscribe(res => {
        // console.log('iii',res)
        this.markersList.push(res);
        this.showMarker = true;
        this.recenterMap(res.lat, res.lng);
        console.log('in map', this.markersList);
      });
    // data of Csv Locations comming from selected-location-component.
    this.csvLocations = this.locationsService.getCsvLocations().subscribe(res => {
      if (res){
        // console.log(res);
        for (let i = 1; i <= res.data.length - 1; i++){
          // console.log('what i want to see' + res.data[i].Adresse);
          // this.geocode(res.data[i].Adresse);
         // console.log('check this', res.data[i].Adresse);
          // this.csvAddressConveter(res.data[i].Adresse);

        }
        // console.log('csv resresponse' + JSON.stringify(this.csvLocationsArray));
      }
    });
    // Locations Data from Api for first time showing all marker on map
    // not going to be used told by suffian
    // this.list = this.locationsService.get();
    // for (let i = 1; i < this.list.length - 1; i++){
    //       // console.log(res.data[i].Locations);
    //         this.geocodeService.geocodeAddress(this.list[i].Locations)
    //           .subscribe(res => {
    //             this.markers.push(res);
    //             console.log('csvaddresscompoenent', this.markers);
    //             }
    //           );
    //       }
    // before optimizedLocations selected Data on tab change
    this.selectedLocations = this.locationsService.getSelectedLocations()
      .subscribe(res => {
        if (res) {
          console.log('response in map', res);
          this.waypoints.push({location: res});
          console.log('wayyypoints', this.waypoints);
          this.tabchangeCalled();
           }
      });
    // on tab change click event
    this.tabChangeDetected = this.tabChanged.subscribe(() => {
    {
     console.log('tab changed');
      this.showMarker = !this.showMarker;
      this.tabchangeCalled();
    }
    }
    );
    // before optimizedLocations selected Data

    // this.subscription = this.locationsService.getMessage().subscribe(res => {
    //   if (res) {
    //     console.log('response', res);
    //     console.log('response', res);
    //     //
    //     this.pos0 = res?.data[0];
    //     this.pos1 = res?.data[res.data.length - 1];
    //     // console.log("postions from map", res.data[0], res.data[res.data.length - 1], this.pos0)
    //     // console.log("postions from map",  this.pos1.Locations)
    //     for (let i = 1; i < res.data.length - 1; i++){
    //       // console.log(res.data[i].Locations);
    //       this.waypoints1.push({location: res.data[i].Locations});
    //     }
    //
    //     this.origin =  this.pos0.Locations;
    //     this.destination =  this.pos1.Locations;
    //     //
    //     // this.messages.push(res);
    //   } else {
    //     // clear messages when empty message received
    //     this.messages = [];
    //   }
    // });
    // console.log('wasypoints' + JSON.stringify(this.waypoints1))

    // after optimizedLocations Data
    // this.optimizedLocations = this.locationsService.getOptimizedLocation().subscribe(message => {
    //   if (message) {
    //     // this.clearMap();
    //     console.log("response message from API",JSON.stringify(message))
    //     this.messages.push(message);
    //     console.log("response message from API",message)
    //
    //     message.data.abjects.splice(-1)
    //     this.pos0 = message.data.abjects[0];
    //       this.pos1 = message.data.abjects[message.data.abjects.length - 1]
    //       // console.log("postions from map", res.data[0], res.data[res.data.length - 1], this.pos0)
    //       // console.log("postions from map",  this.pos1.Locations)
    //     for(let i=1; i<message.data.abjects.length-1; i++){
    //       // console.log(message.data.abjects[i].Locations);
    //       this.waypoints1.push({location:message.data.abjects[i].address});
    //     }
    //   this.origin =  this.pos0.address;
    //   this.destination =  this.pos1.address;
    //   } else {
    //     // clear messages when empty message received
    //     this.messages = [];
    //   }
    // });
    // console.log("Data received after response ",this.messages)
  }
  recenterMap(lat, lng){
    this.latitude = lat;
    this.longitude = lng;
  }
  // recenterMap(){
  //   this.latitude = 36.8392542;
  //   this.longitude = 10.313922699999999;
  // }
  private setCurrentPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }
  // getPosition(){
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       this.latitude = position.coords.latitude + (0.0000000000100 * Math.random());
  //       this.longitude = position.coords.longitude + (0.0000000000100 * Math.random());
  //     });
  //   } else {
  //     alert('Geolocation is not supported by this browser.');
  //   }
  // }
  // showLocation() {
  //   this.addressToCoordinates();
  // }
  // addressToCoordinates() {
  //   this.loading = true;
  //   this.geocodeService.geocodeAddress(this.address)
  //     .subscribe(res => {
  //       console.log(res)
  //               if (res){
  //                 this.locations.push(res);
  //               }
  //               console.log('asf', this.locations)
  //               // this.location.lat = this.locations.lat;
  //               // this.location.lng = this.locations.lng;
  //               // this.locations = Location;
  //               // location = res;
  //
  //               console.log('latt', this.locations[0].lat);
  //               console.log('lngg', this.locations[0].lng);
  //               this.loading = false;
  //               this.ref.detectChanges();
  //       }
  //     );
  // }
  csvAddressConveter(loc){
    this.loading = true;
    this.geocodeService.geocodeAddress(loc)
      .subscribe(res => {
          console.log('csvaddresscompoenent', res);
        }
      );
  }
  ngOnDestroy() {
    if (this.selectedLocations !== undefined){
      this.selectedLocations.unsubscribe();
    }
    if (this.locationsFromApi !== undefined){
      this.locationsFromApi.unsubscribe();
    }
    if (this.csvLocations !== undefined){
      this.csvLocations.unsubscribe();
    }
    if (this.optimizedLocations !== undefined){
      this.optimizedLocations.unsubscribe();
    }

  }
  tabchangeCalled(){
    // for (let i = 0; i <= this.waypoints.length - 1; i++){
    //   this.waypoints.push({location: this.waypoints[i].Locations});
    // }
    this.showMarker = false;
    this.origin = this.waypoints[0].location;
    this.destination = this.waypoints[this.waypoints.length - 1].location;
    console.log('1', this.origin);
    console.log('2', this.destination);
    console.log('3', this.waypoints);
  }
}
