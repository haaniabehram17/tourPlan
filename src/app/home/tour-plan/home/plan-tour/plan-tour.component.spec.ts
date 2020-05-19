import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTourComponent } from './plan-tour.component';

describe('PlanTourComponent', () => {
  let component: PlanTourComponent;
  let fixture: ComponentFixture<PlanTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
