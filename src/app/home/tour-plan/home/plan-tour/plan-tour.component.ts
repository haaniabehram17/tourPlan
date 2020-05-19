import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {animate, style, transition, trigger} from '@angular/animations';
import {LocationHanlderService} from '../../services/locationHandler/location-hanlder.service';
import {AuthService} from '../../services/auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-plan-tour',
  templateUrl: './plan-tour.component.html',
  styleUrls: ['./plan-tour.component.less'],
  animations: [
    trigger('slideInOut', [
      transition('void => *' , [
        style({transform: 'translateX(-100%)'}),
        animate('1s')
      ]),
      transition('void => *', [
        animate('1s', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class PlanTourComponent implements OnInit {
  listOfData: any[] = [];
  selectedLocations: Subscription;
  constructor(public locationsService: LocationHanlderService, public locationsPostService: AuthService) {
  }
  sendrequest = false;
  ngOnInit() {
    this.selectedLocations = this.locationsService.getSelectedLocations().subscribe(res => {
      if (res) {
        this.listOfData.push({address: res});
        console.log('response in ptc', this.listOfData);
        this.sendrequest = true;
        // console.log('listofdata', this.listOfData);
      //   for (let i = 0; i < res.data.length; i++) {
      //     const result = this.listOfData.indexOf({location: res.data[i].Locations});
      //     console.log(result);
      //     this.listOfData.push({location: res.data[i].Locations});
      //     console.log('selected locations in res.data', res.data[i].Locations);
      // }
        // console.log('selected locations in tourplan', res.data);
      }
    });
    // this.listOfData = this.locationsService.get();
    if (this.listOfData !== undefined){
      this.sendrequest = false;
    }
  }
  drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.listOfData, event.previousIndex, event.currentIndex);
  }

  deleteLocation(index) {
    this.listOfData.splice(index, 1);
    console.log(this.listOfData);
  }
  postLocations() {
    // this.locationsService.setUpdatedLocations(this.listOfData);
    console.log('data before sending' , this.listOfData);
    this.locationsPostService.post
    ({
      "objects": this.listOfData,
      "Avoid":"",
      "allow waiting time":"23:00",
      "maximum time per vehicle":"23:00"
    })
      .subscribe(res => {
        console.log('this is response from api ', res);
        this.locationsService.sendOptimizedLocation(res);
      });
  }

}
