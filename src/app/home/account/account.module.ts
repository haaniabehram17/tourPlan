import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { NzListModule } from 'ng-zorro-antd/list';

@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzListModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        children: [
          {
            path: 'basicSetting',
            // canActivate: [AuthGuardService],
            loadChildren: () => import('./basic-setting/basic-setting.module')
              .then(m => m.BasicSettingModule)
          },
          {
            path: 'securitySetting',
            // canActivate: [AuthGuardService],
            loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
          },
          {
            path: 'notification',
            // canActivate: [AuthGuardService],
            loadChildren: () => import('./notification/notification.module').then(m => m.NotificationModule)
          }
        ]
      }
    ]),
  ]
})
export class AccountModule { }
