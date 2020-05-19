import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { isUndefined } from 'util';
import { Location } from './location.interface';
import { LocationsService } from './locations.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.less']
})
export class LocationsComponent implements OnInit {

  locationsData: Location[];
  locationsDataCache: Location[];

  validateForm: FormGroup;
  isAllDisplayDataChecked = false;
  isOperating = false;
  isIndeterminate = false;
  listOfDisplayData: Location[] = [];
  mapOfExpandData: { [key: string]: boolean } = {};
  mapOfCheckedId: { [key: string]: boolean } = {};
  numberOfChecked = 0;
  searchText = '';
  error = '';

  constructor(
    private readonly locationsService: LocationsService,
    private fb: FormBuilder,
    private modalService: NzModalService
  ) { }

  onChange(value: string): void {
    if (value === '') {
      this.locationsData = this.locationsDataCache;
    } else {
      this.locationsData = this.locationsData.filter(
        c => (c.name.toLowerCase().includes(value.toLowerCase()))
      );
    }
    this.refreshStatus();
  }

  ngOnInit() {
    this.fetchData();
  }

  onRowClick(events) {
    console.log(events);
  }

  fetchData() {
    this.locationsService.getLocations().subscribe(data => {
      this.locationsData = data;
      this.locationsDataCache = data;
    }, error => {
      this.error = error;
    });
  }

  currentPageDataChange($event: Location[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    if (isUndefined(this.locationsData)) {
      return null;
    }
    this.isAllDisplayDataChecked = this.listOfDisplayData
      .every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) &&
      !this.isAllDisplayDataChecked;
    this.numberOfChecked = this.locationsData.filter(item => this.mapOfCheckedId[item.id]).length;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }

  operateData(): void {
    this.isOperating = true;
    setTimeout(() => {
      this.locationsData.forEach(item => (this.mapOfCheckedId[item.id] = false));
      this.refreshStatus();
      this.isOperating = false;
    }, 1000);
  }

  deleteData(id: string) {
    this.showDeleteConfirm(id);
  }

  showDeleteConfirm(id: string): void {
    this.modalService.confirm({
      nzTitle: 'Datensatz löschen',
      nzContent: `Wenn sie OK drücken, wird der Datensatz ${id} gelöscht`,
      nzOnOk: () => {
        this.locationsService.deleteLocation(id).subscribe(data => {
          this.locationsData = this.locationsData.filter(c => c.id !== id);
        }, (error) => {
          this.modalService.error(
            {
              nzTitle: 'Fehler',
              nzContent: 'Projekt konnte nicht gelöscht werden.'
            });
        });
      }
    });
  }

}
