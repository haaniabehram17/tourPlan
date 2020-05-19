import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { BankdetailsComponent } from './bankdetails.component';

describe('BankdetailsComponent', () => {
  let component: BankdetailsComponent;
  let fixture: ComponentFixture<BankdetailsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BankdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
