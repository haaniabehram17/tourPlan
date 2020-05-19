import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {GeneralContactAddressComponent} from './company-data.component';


describe('GeneralContctAddreddComponent', () => {
  let component: GeneralContactAddressComponent;
  let fixture: ComponentFixture<GeneralContactAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralContactAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralContactAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
