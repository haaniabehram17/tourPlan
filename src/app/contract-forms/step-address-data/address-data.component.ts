import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CommonFormService } from '../commonFormService/common-form-service.service';
import { CountriesService } from '../commonFormService/countries.services';
import { RechnungFormService } from './address-data.service';
import { CommonFormsFile } from '../commonFormsFile';

@Component({
  selector: 'step-address-data',
  templateUrl: './address-data.component.html',
  styleUrls: ['./address-data.component.less'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class AddressDataComponent implements OnInit {

  data;
  duration;
  countries: any;
  selectedValue: any;

  ngOnInit(): void {
    this.getCountries();
    // if (CommonFormsFile.RechnungFormComponent != null) {
    //   this.currentState.RechnungFormComponent = CommonFormsFile.RechnungFormComponent;
    //   // console.log('this is whant i want to seee');
    //   // const result = JSON.stringify(this.currentState.getRechnung());
    //   // console.log(result);
    // }
    // else {
    //   this.currentState.getRechnung();
    //
    // }
  }
  constructor(
    public service: CountriesService,
    public currentState: CommonFormService
  ) { }
  // getProf() {
  //   this.validateForm = new FormGroup({
  //     firma: new FormControl('', [Validators.required]),
  //     anrede: new FormControl('', [Validators.required]),
  //     vorname: new FormControl('', [Validators.required]),
  //     nachname: new FormControl('', [Validators.required]),
  //     plz: new FormControl({value: '', disable: true}, [Validators.required]), // can't be changed
  //     ort: new FormControl('', [Validators.required]), // dropdown
  //     straße: new FormControl('', [Validators.required]),
  //     weitereAdresszeile: new FormControl('', [Validators.required]), // dropdown
  //     bundesland: new FormControl('', [Validators.required]),
  //     land: new FormControl('', [Validators.required]),
  //     department: new FormControl('', [Validators.required]),
  //   });
  // }
  // getResponse() {
  //   this.rechnungFormService.getBillingAddressDetails().subscribe(data => {
  //     console.log(data);
  //     this.validateForm.get('firma').setValue(data.rechnungsfirma);
  //     this.validateForm.get('nachname').setValue(data.rechnungNachname);
  //     this.validateForm.get('ort').setValue(data.rechnungOrt);
  //     this.validateForm.get('plz').setValue(data.rechnungPlz);
  //     this.validateForm.get('straße').setValue(data.rechnungStraße);
  //     this.validateForm.get('weitereAdresszeile').setValue(data.rechnungWeitereAdresszeile);
  //     this.validateForm.get('bundesland').setValue(data.bundesland);
  //     this.validateForm.get('land').setValue(data.rechnungLand);
  //     this.validateForm.get('anrede').setValue(data.rechnungAnrede);
  //     this.validateForm.get('department').setValue(data.rechnungsabteilung);
  //     this.validateForm.get('vorname').setValue(data.rechnungVorname);
  //   });
  // }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  getCountries() {
    this.service.getCountries()
      .subscribe(response => {
        // console.log(response);
        this.countries = response;
      });
  }
}
