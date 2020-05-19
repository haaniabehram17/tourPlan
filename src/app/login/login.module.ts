import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: LoginComponent
    }]),
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
