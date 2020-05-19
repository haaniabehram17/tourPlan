import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { SetNewPasswordService } from './set-new-password.service';

@Component({
  selector: 'app-set-new-password',
  templateUrl: './set-new-password.component.html',
  styleUrls: ['./set-new-password.component.less']
})
export class SetNewPasswordComponent implements OnInit, AfterViewInit {

  payload;
  validateForm: FormGroup;
  loading = false;
  error = '';
  info = '';
  returnUrl: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private setNewPasswordService: SetNewPasswordService,
    private authService: AuthService,
  ) { }

  async ngOnInit() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]]
    });
    this.payload = this.authService.getPayload();
  }

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
  }

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      if (this.validateForm.controls.hasOwnProperty(i)) {
        this.validateForm.controls[i].markAsDirty();
        this.validateForm.controls[i].updateValueAndValidity();
      }
    }
    this.loading = true;
    this.setNewPasswordService.setNewPassword(this.validateForm.value).subscribe(data => {
      this.loading = false;
      this.error = '';
      this.info = 'Passwort erfolgreich aktualisiert.';
      if (data.hasFinishedContractReview) {
        this.router.navigateByUrl('/home/start');
      } else {
        this.router.navigateByUrl('/contract');
      }
    }, err => {
      this.loading = false;
      this.error = err;
    });
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };
}
