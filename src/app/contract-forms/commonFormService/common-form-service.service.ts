import { Injectable } from '@angular/core';
import { GeneralContactAddressService } from '../step-company-data/company-data.service';
import { RechnungFormService } from '../step-address-data/address-data.service';

@Injectable({
  providedIn: 'root'
})
export class CommonFormService {
  constructor(
    public profileService: GeneralContactAddressService,
    public rechnungFormService: RechnungFormService,
  ) { }

  GeneralContactAddressComponent: any = {
    firma: '',
    anrede: '',
    vorname: '',
    nachname: '',
    kundennummer: '',
    email: '',
    kundenType: '',
    startDate: '',
    endDate: '',
    position: '',
    abteilung: '',
    duration: '',
    address: '',
    plz: '',
    ort: '',
    weitereAdresszeile: '',
    bundesland: '',
    land: '',
    telefon: '',
    fax: '',
    web: '',
    mobilGeschaftlich: '',
    telefon2: '',
    email2: '',
    lid: '',
    mobilPrivat: ''
  };

  RechnungFormComponent: any = {
    lid: '',
    rechnungsfirma: '',
    rechnungNachname: '',
    rechnungLand: '',
    rechnungAnrede: '',
    bundesland: '',
    rechnungOrt: '',
    rechnungVorname: '',
    rechnungStraße: '',
    rechnungWeitereAdresszeile: '',
    email: '',
    rechnungPlz: '',
  };

  RechnungsversandFormComponent: any = {
    lid: '',
    eMailRechnung: '',
    nachnameRechnung: '',
    vornameRechnung: '',
    anredeRechnung: '',
    rechnungsversand: '',
    email: '',
    // firma: '',
    // anrede: '',
    // vorname: '',
    // nachname: '',
    // Address: '',
    // plz: '',
    // ort: '',
    // bundesland: '',
    // land: '',
    // email: '',
  };

  LieferadresseComponent: any = {
    lid: '',
    email: '',
    land: '',
    firmenname: '',
    vorname: '',
    nachname: '',
    plz: '',
    straße: '',
    ort: '',
    appartment: '',
    anmerkungen: '',
  };

  ServicevertragComponent: any = {
    lid: '',
    email: '',
    vertragstyp: '',
    vertragsdatum: '',
    vertragsort: '',
    hardwaregarantie: '',
    loginStatus: ''
  };

  ZahlungFormComponent: any = {
    lid: '',
    email: '',
    zahlungsart: '',
    vorauszahlung: '',
    rechnungszyklus: ''
  };

  ContactPersonFormComponent: any = {
    lid: '',
    email: '',
    anrede: '',
    position: '',
    ausgeschieden: '',
    nachname: '',
    vorname: '',
    telefon: '',
    telefonMobil: ''
  };
  VehicleDetailFormComponent: any = {
    lid: '',
    kundenlid: '',
    status: '',
    fahrzeugtyp: '',
    hersteller: '',
    modellFahrzeug: '',
    baujahr: '',
    kennzeichen: '',
    name: '',
    imei: ''
  };
  BankDetailsFormComponent: any = {
    lid: '',
    email: '',
    iban: '',
    bic: '',
    kreditinstitut: '',
    kontoinhaber: '',
    mandatsID: ''
  };
  ContractFormPage2Component: any = {
    vorname: '',
    email: '',
    kontoinhaber: '',
    bankverbindung: '',
    bank: '',
    iBAN: '',
    bIC: '',
    ortDatum: ''
  };

  vehicleList: Array<any> = [];
  contactPersonList: Array<any> = [];

  getContactAddress() {
    this.profileService.getCustomer().subscribe(response => {
      this.GeneralContactAddressComponent = response;
    });
    // console.log(this.FormStepperComponent);
    return this.GeneralContactAddressComponent;
  }

  getRechnung() {
    this.rechnungFormService.getBillingAddressDetails().subscribe(response => {
      this.RechnungFormComponent = response;
    });
    // console.log('this is rechnungformcomponent in service' + this.RechnungFormComponent);
    return this.RechnungFormComponent;
  }

  getFinalContractForm() {
    return this.ContractFormPage2Component;
  }
}
