import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CommonFormService } from '../commonFormService/common-form-service.service';
import { CountriesService } from '../commonFormService/countries.services';

@Component({
  selector: 'step-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./company-data.component.less'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }]
})
export class GeneralContactAddressComponent implements OnInit {

  countries: any;
  constructor(public currentState: CommonFormService, private countriesService: CountriesService) { }

  ngOnInit(): void {
    // this.populateContries();
    // if (CommonFormsFile.GeneralContactAddressComponent != null) {
    //   this.currentState.GeneralContactAddressComponent = CommonFormsFile.GeneralContactAddressComponent;
    //   // console.log('this is whant i want to seee');
    //   // console.log(JSON.stringify(this.currentState.FormStepperComponent));
    // }
    // else {
    //   this.currentState.getContactAddress();
    // }
  }
  populateContries() {
    this.countriesService.getCountries().subscribe(data => {
      this.countries = data;
    });
  }
  onChange(f) {
    console.log(f);
  }
}
