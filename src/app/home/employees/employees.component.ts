import { Component, OnInit } from '@angular/core';
import { EmployeeData } from './employee.interface';
import { isUndefined } from 'util';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.less']
})

export class EmployeesComponent implements OnInit {

  employeesData: EmployeeData[];
  employeesDataCache: EmployeeData[];

  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: EmployeeData[] = [];
  mapOfExpandData: { [key: string]: boolean } = {};
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  searchText = '';
  error = '';

  constructor() {
    this.employeesData = [];
    this.employeesDataCache = [];
  }

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    for (let i = 0; i < 100; i++) {
      this.employeesData.push({
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
    this.employeesDataCache = this.employeesData;
  }

  onChange(value: string): void {
    if (value === '') {
      this.employeesData = this.employeesDataCache;
    } else {
      this.employeesData = this.employeesData.filter(
        c => (c.designation.toLowerCase().includes(value.toLowerCase()))
      );
    }
    this.refreshStatus();
  }

  currentPageDataChange($event: EmployeeData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    if (isUndefined(this.employeesData)) {
      return null;
    }
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.employeesData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
}
