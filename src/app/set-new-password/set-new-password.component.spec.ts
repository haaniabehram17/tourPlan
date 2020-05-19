import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { SetNewPasswordComponent } from './set-new-password.component';

describe('SetNewPasswordComponent', () => {
  let component: SetNewPasswordComponent;
  let fixture: ComponentFixture<SetNewPasswordComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SetNewPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetNewPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
