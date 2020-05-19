import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, AfterViewInit {

  validateForm: FormGroup;
  loading = false;
  error = '';
  returnUrl: string;
  payload;
  @ViewChild('nameRef') nameElementRef: ElementRef;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
  ) {

  }

  async ngOnInit() {
    this.validateForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [true]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
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

    this.authService.login(
      this.validateForm.value.username,
      this.validateForm.value.password
    ).pipe(first())
      .subscribe(
        result => {
          this.router.navigateByUrl(this.returnUrl);
          this.loading = false;
        },
        errors => {
          console.log(errors);
          this.error = 'Anmeldung fehlgeschlagen.';
          this.loading = false;
        }
      );
  }

  // login(): void {
  //   this.loading = true;
  //   this._authService.startAuthentication();
  // }

}
