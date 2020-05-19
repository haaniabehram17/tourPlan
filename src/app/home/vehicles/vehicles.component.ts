import { Component, OnInit } from '@angular/core';
import { VehicleData } from './vehicle.interface';
import { isUndefined } from 'util';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.less']
})
export class VehiclesComponent implements OnInit {

  vehiclesData: VehicleData[];
  vehiclesDataCache: VehicleData[];

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: VehicleData[] = [];
  mapOfExpandData: { [key: string]: boolean } = {};
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  searchText = '';
  error = '';

  constructor() {
    this.vehiclesData = [];
    this.vehiclesDataCache = [];
   }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    for (let i = 0; i < 100; i++) {
      this.vehiclesData.push({
        id: i,
        designation: `Koblenz. ${i}`,
        address: `Germany. ${i}`,
        postCode: 34,
        place: `Universe. ${i}`,
        country: `Germany.${i}`,
        contactPerson: 12345,
        created: `Asif.${i}`,
      });
    }
    this.vehiclesDataCache = this.vehiclesData;
  }

  onChange(value: string): void {
    if (value === '') {
      this.vehiclesData = this.vehiclesDataCache;
    } else {
      this.vehiclesData = this.vehiclesData.filter(
        c => (c.designation.toLowerCase().includes(value.toLowerCase()))
      );
    }
    this.refreshStatus();
  }

  currentPageDataChange($event: VehicleData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    if (isUndefined(this.vehiclesData)) {
      return null;
    }
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.vehiclesData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

}
