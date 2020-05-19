import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
import { first } from 'rxjs/operators';
import { ForgotPasswordService } from './forgot-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {

  validateForm: FormGroup;
  loading = false;
  error = '';
  returnUrl: string;

  @ViewChild('nameRef') nameElementRef: ElementRef;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly forgotPasswordService: ForgotPasswordService,
  ) { }

  async ngOnInit() {
    this.validateForm = this.fb.group({
      email: ['', [Validators.required]]
    });
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

    this.forgotPasswordService.getAccountByEmail(
      this.validateForm.value.email
    ).pipe(first())
      .subscribe(
        result => {
          const payload = JSON.stringify(decode(result.access_token));
          localStorage.setItem('token', result.access_token);
          localStorage.setItem('payload', payload);
          this.router.navigateByUrl('/setNewPassword');
          this.loading = false;
        },
        error => {
          this.error = error;
          this.loading = false;
        }
      );
  }
}
