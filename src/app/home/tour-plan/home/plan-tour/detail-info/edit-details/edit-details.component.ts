import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.less']
})
export class EditDetailsComponent implements OnInit {
  validateForm: FormGroup;
  visible: boolean;
  time = new Date();
  Planungsgruppe: any;
  gender: any;
  Fahrzeug: any;
  Fahrer: any;
  tourteil: any;
  date = null;
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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      note: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      time: [null, [Validators.required]],
    });
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
}
