import {Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {NgxCsvParser, NgxCSVParserError} from 'ngx-csv-parser';
import {LocationHanlderService} from '../../services/locationHandler/location-hanlder.service';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy } from '@angular/core';
import {Subscription} from 'rxjs';
import {FormControl} from '@angular/forms';
import {GeoLocationsService} from '../../services/geocodeLocations/geo-locations.service';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-select-location',
  templateUrl: './select-location.component.html',
  styleUrls: ['./select-location.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectLocationComponent implements OnInit {
  constructor(public locationService: LocationHanlderService,
              public geoLocationsService: GeoLocationsService,
              private http: HttpClient,
              public ngxCsvParser: NgxCsvParser,
              private mapsAPILoader: MapsAPILoader,
              private ngZone: NgZone) {
  }
  @Output() tabChange = new EventEmitter();
  loading: any;
  showLocationsCheck = true;
  selectingLocations: any [] = [{locations: 'koblenz germany'}];
  selectedLocations: any = [];
  csvRecords: any[] = [];
  uploadCheck = false;
  uploading = false;
  showUploadbuttonn = false;
  fileList: File[] = [];
  testbol = true;
  private geoCoder: any;
  public searchControl: FormControl;
  public zoom: number;
  markersList: any[] = [];
  locationList: any[] = [];
  csvlocationList: any[] = [];
  newAddress: any;
  @ViewChild('search', {static: true}) public searchElementRef: ElementRef;
// {"objects":[
//     {"Service_Time":1,"time_windows":["8:0","8:30"],"Locations":"Wellingsweg 78, 56072 Koblenz"},
//     {"Service_Time":1,"time_windows":["9:0","9:30"],"Locations":"Im Acker 59B, 56072 Koblenz" },
//     {"Service_Time":1,"time_windows":["10:0","10:30"],"Locations":"Im Hüttenstück 17, 56070 Koblenz"},
//     {"Service_Time":1,"time_windows":["11:0","11:30"],"Locations":"Andernacher Str. 82, 56070 Koblenz"}
//     ,{"Service_Time":1,"time_windows":["12:0","12:30"],"Locations":"Von-Kuhl-Straße 50, 56070 Koblenz"},
//     {"Service_Time":1,"time_windows":["13:0","13:30"],"Locations":"Karl-Russell-Straße 4, 56070 Koblenz"},
//     {"Service_Time":1,"time_windows":["14:0","14:30"],"Locations":"Weinbergstraße 26, 56070 Koblenz"},
//     {"Service_Time":1,"time_windows":["15:0","15:30"],"Locations":"Mayener Str. 158, 56070 Koblenz"},
//     {"Service_Time":1,"time_windows":["16:0","16:30"],"Locations":"Am Grüngürtel 5, 56295 Rüber"},
//     {"Service_Time":1,"time_windows":["17:0","17:30"],"Locations":"K46 48, 56295 Rüber"},
//     {"Service_Time":1,"time_windows":["18:0","18:30"],"Locations":"Jahnstraße 2A, 56218 Mülheim-Kärlich"}
//   ],
//   "Avoid":"",
//   "allow waiting time":"23:00",
//   "maximum time per vehicle":"23:00"
// }
//   handleChange($event): void {
//     console.log($event.target);
//       this.ngxCsvParser.parse($event.target.files.originFileObj, { header: true, delimiter: ';' })
//         .subscribe((result: Array<any>) => {
//         console.log('parsed Result', result);
//         // searchQuery = searchQuery.replace(/ß/gi, 'ss').replace(/ü/gi, 'ue').replace(/ö/gi, 'oe').replace(/ä/gi, 'ae')
//         this.csvRecords = result;
//         this.locationService.setCsvFileLocations(result);
//       }, (error: NgxCSVParserError) => {
//         console.log('Error', error);
//       });
//   }
  checked: any;
  ngOnInit(): void {
    this.showMap();
    // this.locationService.setLocationsofAPI(this.inputList);
    this.locationService.set(this.inputList);
    // this.searchedLocations = this.locationService.getmapSearchedLocations()
    //   .subscribe(res => {
    //   // console.log('from selected locaitons', res);
    //   this.selectingLocations.push(res);
    //   this.testbol = true;
    //   console.log('from selected locaitons', this.selectingLocations);
    // });
  }
  inputList = [
    {"Service_Time":1,"time_windows":["8:0","8:30"],"Locations":"Wellingsweg 78, 56072 Koblenz"},
    {"Service_Time":1,"time_windows":["9:0","9:30"],"Locations":"Im Acker 59B, 56072 Koblenz" },
    {"Service_Time":1,"time_windows":["10:0","10:30"],"Locations":"Im Hüttenstück 17, 56070 Koblenz"},
    {"Service_Time":1,"time_windows":["11:0","11:30"],"Locations":"Andernacher Str. 82, 56070 Koblenz"}
    ,{"Service_Time":1,"time_windows":["12:0","12:30"],"Locations":"Von-Kuhl-Straße 50, 56070 Koblenz"},
    {"Service_Time":1,"time_windows":["13:0","13:30"],"Locations":"Karl-Russell-Straße 4, 56070 Koblenz"},
    {"Service_Time":1,"time_windows":["14:0","14:30"],"Locations":"Weinbergstraße 26, 56070 Koblenz"},
    {"Service_Time":1,"time_windows":["15:0","15:30"],"Locations":"Mayener Str. 158, 56070 Koblenz"},
    {"Service_Time":1,"time_windows":["16:0","16:30"],"Locations":"Am Grüngürtel 5, 56295 Rüber"},
    {"Service_Time":1,"time_windows":["17:0","17:30"],"Locations":"K46 48, 56295 Rüber"},
    {"Service_Time":1,"time_windows":["18:0","18:30"],"Locations":"Jahnstraße 2A, 56218 Mülheim-Kärlich"}
  ];
  beforeUpload = (file: File): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  handleUpload(): void {
    const formData = new FormData();
    // tslint:disable-next-line:no-any
    this.fileList.forEach((file: any) => {
      formData.append('files[]', file);
    });
    this.uploading = true;
    console.log(this.fileList[0]);
    const file = this.fileList[0];
    console.log(file);
    this.ngxCsvParser.parse(file, { header: true, delimiter: ';'})
      .subscribe((result: Array<any>) => {
        console.log('parsed Result', result);
        //
        // searchQuery = searchQuery.replace(/ß/gi, 'ss').replace(/ü/gi, 'ue').replace(/ö/gi, 'oe').replace(/ä/gi, 'ae')
        // for (let i = 0; i <= result.length - 1; i++) {
        //   // console.log(JSON.stringify(result), typeof (result[i].Bezeichnung));
        //   // console.log('before', result[i].Bezeichnung);
        //   result[i].Bezeichnung = result[i].Bezeichnung.replace(/ß/gi, 'ss').replace(/ü/gi, 'ue').replace(/ö/gi, 'oe').replace(/ä/gi, 'ae');
        //   // console.log(result[i].Bezeichnung);
        //   // result[i].Name = result[i].Name.replace(/ß/gi, 'ss').replace(/ü/gi, 'ue').replace(/ö/gi, 'oe').replace(/ä/gi, 'ae');
        //   // result[i].Adresse = result[i].Adresse.replace(/ß/gi, 'ss').replace(/ü/gi, 'ue').replace(/ö/gi, 'oe').replace(/ä/gi, 'ae');
        // }
        console.log('parsed Result', result);
        this.csvRecords = result;
        for (let i = 0; i <= result.length - 1; i++) {
          this.locationList.push({location: result[i].Adresse, isChecked: true});
          this.tabChange.emit();
          this.locationService.setSelectedLocations(result[i].Adresse);
          this.geoLocationsService.geocodeAddress(result[i].Adresse)
            .subscribe(res => {
              this.locationService.setmapSearchedLocations({lat: res?.lat, lng: res?.lng});
              console.log('before', res);
            });
        }
        this.locationService.setCsvFileLocations(result);
      }, (error: NgxCSVParserError) => {
        console.log('Error', error);
      });
    this.uploading = false;
    // You can use any AJAX library you like
  }
  showMap(){
    // set google maps defaults
    this.zoom = 15;
    /* this.latitude = 39.8282;
    this.longitude = -98.5795; */

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position

    // this.recenterMap()

    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      // this.geoCoder = new google.maps.Geocoder();
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });

      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          const latitude = place.geometry.location.lat();
          const longitude = place.geometry.location.lng();
          // list of lng and lat for markers
          this.locationService.setmapSearchedLocations({lat: latitude, lng: longitude});
          // this.markersList.push({lat: this.latitude, lng: this.longitude});
          // console.log('setCurrentPosition', JSON.stringify(this.markersList));
          // reverse geocoding
          this.getAddress(latitude, longitude);
          // console.log(this.latitude);
          // console.log(this.longitude);
          this.zoom = 12;
        });
      });
    });
  }
  getAddress(latitude, longitude) {
    this.geoCoder = new google.maps.Geocoder();
    this.geoCoder.geocode({ location: { lat: latitude, lng: longitude } }, (results, status) => {
      // console.log(results);
      // console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          const address = results[0].formatted_address;
          console.log('reversed address', address);
          this.newAddress = address;
          // this.locationService.setSelectedLocations(address);
          // this.locationList.push({location: address});
          // this.tabChange.emit();
          console.log('reversed address1', this.locationList);
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }
  addClick(item: any, isChecked: any) {
    console.log("item ", item);
    // console.log(isChecked);
    if (item.isChecked === true) {
      this.selectedLocations.push(item);
      console.log("added : ", this.selectedLocations);
      // console.log(this.selectedLocations);
      // this.locationService.setSelectedLocations(this.selectedLocations);
      // console.log('test loc', this.selectedLocations);
    } else {
      const indexofItem = this.selectedLocations.indexOf(item);
      delete this.selectingLocations[item];
      // this.selectedLocations.splice(indexofItem, 1);
      console.log("removed : ", this.selectedLocations);
      // this.locationService.setSelectedLocations(this.selectedLocations);
    }
    // this.change.emit(this.selectedLocations);
  }
  showLocationFun() {
    this.showLocationsCheck = !this.showLocationsCheck;
  }

  showUploadbtn() {
    console.log('btn chliced');
    this.showUploadbuttonn = !this.showUploadbuttonn;
  }

  addLocation() {
    this.locationList.push({location: this.newAddress, isChecked: true});
    this.locationService.setSelectedLocations(this.newAddress);
    this.selectingLocations = this.locationList;
    console.log(this.selectingLocations);

    // this.locationList.push({location: address});
  }
}
