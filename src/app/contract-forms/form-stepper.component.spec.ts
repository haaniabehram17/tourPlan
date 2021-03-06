import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStepperComponent } from './form-stepper.component';

describe('GeneralContactAddressComponent', () => {
  let component: FormStepperComponent;
  let fixture: ComponentFixture<FormStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
