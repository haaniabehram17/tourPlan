import { Component, OnInit } from '@angular/core';
import {NzMessageService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-detail-info',
  templateUrl: './detail-info.component.html',
  styleUrls: ['./detail-info.component.less']
})
export class DetailInfoComponent implements OnInit {
  validateForm: FormGroup;
  visible: boolean;
  time = new Date();
  Planungsgruppe: any;
  gender: any;
  Fahrzeug: any;
  Fahrer: any;
  tourteil: any;
  date = null;
  startzeit: any;
  standzeit: any;
  einsatzstart: any;
  tourName: any;
  Wiederholungen: any;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  genderChange(value: string): void {
    this.validateForm.get('note')!.setValue(value === 'male' ? 'Hi, man!' : 'Hi, lady!');
  }

  constructor() {}

  ngOnInit(): void {
  }

  clickMe() {
    this.visible = false;
  }
  change(value: boolean){
    console.log(value);
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  // checkOptionsOne = [
  //   { label: 'Montag', value: 'Montag', checked: true },
  //   { label: 'Dienstag', value: 'Dienstag' },
  //   { label: 'Mittwoch', value: 'Mittwoch' },
  //   { label: 'Donnerstag', value: 'Donnerstag' },
  //   { label: 'Freietag', value: 'Donnerstag' },
  //   { label: 'Samstag', value: 'Samstag' },
  //   { label: 'Sonntag', value: 'Sonntag' },
  // ];

  log(value: string[]): void {
    console.log(value);
  }

  onSubmit() {

  }
}
