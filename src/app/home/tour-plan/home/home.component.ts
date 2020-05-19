import {Component, OnInit, Output} from '@angular/core';
import {LocationHanlderService} from '../services/locationHandler/location-hanlder.service';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class TourPlanHomeComponent implements OnInit {

  isboolean = true;
  printLocations: any[];
  newLocationsObj: any;
  isCollapsed = false;
  tabDisable = true;
  current: any;
  constructor(private locationService: LocationHanlderService) { }
  tabChanged: Subject<void> = new Subject<void>();
  switch(){
    this.tabChanged.next();
    console.log('btn clicked');
  }
    // this.newLocationsObj = this.locationService.get();
    // this.sendMessage(this.newLocationsObj);
    // console.log('customer component data on switch' , JSON.stringify(this.newLocationsObj));
    // let pos0, pos1;
    // if (this.newLocationsObj !== undefined && this.newLocationsObj.length > 0){
    //   pos0 = this.newLocationsObj[0];
    //   pos1 = this.newLocationsObj[this.newLocationsObj.length - 1];
    //   console.log('postions', pos0, pos1);
      // for(let i=0; i<this.newLocationsObj.length; i++){
      //   console.log(this.newLocationsObj[i].Locations);
      //   this.printLocations.push(this.newLocationsObj[i].Locations);
      //
      // }
  //
  //   }
  //
  //   this.isboolean = !this.isboolean;
  //   console.log(this.printLocations);
  // }
  ngOnInit() {
  }
  // sendMessage(data: any): void {
  //   console.log('sending message');
  //   // send message to subscribers via observable subject
  //   this.locationService.sendMessage(data);
  // }
  dumFun(){
    console.log('dumb clicked')
  }
  changeTab() {
    this.dumFun();
    this.tabDisable = false;
  }
}
