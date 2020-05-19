import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonFormService } from './commonFormService/common-form-service.service';
import { CommonFormsFile } from './commonFormsFile';
import { AllFormsPost } from './commonFormService/all-FormsPost';

@Component({
  selector: 'app-general-contact-address',
  templateUrl: './form-stepper.component.html',
  styleUrls: ['./form-stepper.component.less'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})

export class FormStepperComponent implements OnInit {
  data;
  duration;
  current = 0;
  profileForm: FormGroup;
  disable1 = true; disable2 = true; disable3 = true; disable4 = true; disable5 = true;
  disable6 = true; disable7 = true; disable8 = true; disable9 = true; disable10 = true;
  constructor(private router: Router, public currentState: CommonFormService) { }

  ngOnInit() {

  }

  submitForm(value: any): void {
    console.log('Successful registration');
    console.log(value);
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
  pre(): void {

    switch (this.current) {
      case 0: {
        CommonFormsFile.GeneralContactAddressComponent = this.currentState.GeneralContactAddressComponent;
        break;
      }
      case 1: {
        CommonFormsFile.RechnungFormComponent = this.currentState.RechnungFormComponent;
        break;
      }
      case 2: {
        CommonFormsFile.RechnungsversandFormComponent = this.currentState.RechnungsversandFormComponent;
        break;
      }
      case 3: {
        CommonFormsFile.LieferadresseComponent = this.currentState.LieferadresseComponent;
        break;
      }
      case 4: {
        CommonFormsFile.ServicevertragComponent = this.currentState.ServicevertragComponent;
        break;
      }
      case 5: {
        CommonFormsFile.ZahlungFormComponent = this.currentState.ZahlungFormComponent;
        break;
      }
      case 6: {
        CommonFormsFile.ContactPersonFormComponent = this.currentState.ContactPersonFormComponent;
        break;
      }
      case 7: {
        CommonFormsFile.VehicleDetailFormComponent = this.currentState.VehicleDetailFormComponent;
        break;
      }
      case 8: {
        CommonFormsFile.BankDetailsFormComponent = this.currentState.BankDetailsFormComponent;
        break;
      }
      case 9: {
        CommonFormsFile.ContractFormPage2Component = this.currentState.ContractFormPage2Component;
        break;
      }
    }
    this.current -= 1;
  }

  next(): void {
    switch (this.current) {
      case 1: {
        CommonFormsFile.ContractFormPage2Component = this.currentState.ContractFormPage2Component;
        this.disable1 = false;
        break;
      }
      case 2: {
        CommonFormsFile.GeneralContactAddressComponent = this.currentState.GeneralContactAddressComponent;
        this.disable2 = false;
        break;
      }
      case 3: {
        CommonFormsFile.RechnungFormComponent = this.currentState.RechnungFormComponent;
        this.disable3 = false;
        break;
      }
      case 4: {
        CommonFormsFile.RechnungsversandFormComponent = this.currentState.RechnungsversandFormComponent;
        this.disable4 = false;
        break;
      }
      case 5: {
        CommonFormsFile.LieferadresseComponent = this.currentState.LieferadresseComponent;
        this.disable5 = false;
        break;
      }
      case 6: {
        CommonFormsFile.ServicevertragComponent = this.currentState.ServicevertragComponent;
        this.disable6 = false;
        break;
      }
      case 7: {
        CommonFormsFile.ZahlungFormComponent = this.currentState.ZahlungFormComponent;
        this.disable7 = false;
        break;
      }
      case 8: {
        CommonFormsFile.ContactPersonFormComponent = this.currentState.ContactPersonFormComponent;
        this.disable8 = false;
        break;
      }
      case 9: {
        CommonFormsFile.VehicleDetailFormComponent = this.currentState.VehicleDetailFormComponent;
        this.disable9 = false;
        break;
      }
      case 10: {
        CommonFormsFile.BankDetailsFormComponent = this.currentState.BankDetailsFormComponent;
        this.disable10 = false;
        break;
      }
    }
    this.current += 1;
  }


  done(value): void {
    this.current += 1;
    console.log('Successful registration');
    // console.log(this.currentState);

    const post = new AllFormsPost(
      CommonFormsFile.GeneralContactAddressComponent,
      CommonFormsFile.RechnungFormComponent,
      CommonFormsFile.RechnungsversandFormComponent,
      CommonFormsFile.LieferadresseComponent,
      CommonFormsFile.ServicevertragComponent,
      CommonFormsFile.ZahlungFormComponent,
      CommonFormsFile.ContactPersonFormComponent,
      CommonFormsFile.VehicleDetailFormComponent,
      CommonFormsFile.BankDetailsFormComponent,
      CommonFormsFile.ContractFormPage2Component
    );

    post.setFormsData(post);
    console.log(post);
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 5000);  // 5s
  }
  onIndexChange(event: number): void {
    this.current = event;
  }
}
