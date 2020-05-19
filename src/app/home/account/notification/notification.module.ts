import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NotificationComponent} from './notification.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{
      path: '',
      component: NotificationComponent
    }]),
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
  ],
  declarations: [NotificationComponent]
})
export class NotificationModule { }
