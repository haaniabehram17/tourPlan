export class AllFormsPost {

  public static FormsData: AllFormsPost;

  public GeneralContactAddressComponent: any;
  public RechnungFormComponent: any;
  public RechnungsversandFormComponent: any;
  public LieferadresseComponent: any;
  public ServicevertragComponent: any;
  public ZahlungFormComponent: any;
  public ContactPersonFormComponent: any;
  public VehicleDetailFormComponent: any;
  public BankDetailsFormComponent: any;
  public ContractFormPage2Component: any;

  constructor(GeneralContactAddressComponent: any,
    RechnungFormComponent: any,
    RechnungsversandFormComponent: any,
    LieferadresseComponent: any,
    ServicevertragComponent: any,
    ZahlungFormComponent: any,
    ContactPersonFormComponent: any,
    VehicleDetailFormComponent: any,
    BankDetailsFormComponent: any,
    ContractFormPage2Component: any
  ) {
    this.GeneralContactAddressComponent = GeneralContactAddressComponent;
    this.RechnungFormComponent = RechnungFormComponent;
    this.RechnungsversandFormComponent = RechnungsversandFormComponent;
    this.LieferadresseComponent = LieferadresseComponent;
    this.ServicevertragComponent = ServicevertragComponent;
    this.ZahlungFormComponent = ZahlungFormComponent;
    this.ContactPersonFormComponent = ContactPersonFormComponent;
    this.VehicleDetailFormComponent = VehicleDetailFormComponent;
    this.BankDetailsFormComponent = BankDetailsFormComponent;
    this.ContractFormPage2Component = ContractFormPage2Component;
  }

  setFormsData(formsData: AllFormsPost) {
    AllFormsPost.FormsData = formsData;
  }
}
