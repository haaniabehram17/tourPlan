import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonFormService } from './commonFormService/common-form-service.service';
import { FormStepperComponent } from './form-stepper.component';
import { ContractFormPage0Component } from './step-intro/step0.component';
import { ContractFormPage1Component } from './step-contract1/step1.component';
import { ContractFormPage2Component } from './step-contract2/step2.component';
import { GeneralContactAddressComponent } from './step-company-data/company-data.component';
import { AddressDataComponent } from './step-address-data/address-data.component';
import { StepDocumentsComponent } from './step-documents/step-documents.component';


@NgModule({
  declarations: [
    AddressDataComponent,
    FormStepperComponent,
    ContractFormPage0Component,
    ContractFormPage1Component,
    ContractFormPage2Component,
    GeneralContactAddressComponent,
    StepDocumentsComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: FormStepperComponent
    }]),
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [CommonFormService]
})
export class FormStepperModule { }
