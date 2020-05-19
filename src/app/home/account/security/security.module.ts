import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {SecurityComponent} from './security.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: SecurityComponent
    }]),
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
  ],
  declarations: [SecurityComponent]
})
export class SecurityModule { }
