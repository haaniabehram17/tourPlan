import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFormPage2Component } from './contract-form-page2.component';

describe('ContractFormPage2Component', () => {
  let component: ContractFormPage2Component;
  let fixture: ComponentFixture<ContractFormPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFormPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFormPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
