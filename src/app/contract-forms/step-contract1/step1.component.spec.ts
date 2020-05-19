import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractFormPage1Component } from './step1.component';

describe('ContractFormPage1Component', () => {
  let component: ContractFormPage1Component;
  let fixture: ComponentFixture<ContractFormPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractFormPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractFormPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
