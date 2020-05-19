import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-setting',
  templateUrl: './basic-setting.component.html',
  styleUrls: ['./basic-setting.component.less']
})
export class BasicSettingComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      contactPerson: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      address: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      bankInformation: [null, [Validators.required]],
      bankInformation1: [null, [Validators.required]],
      bankInformation2: [null, [Validators.required]],

    });
  }
}
