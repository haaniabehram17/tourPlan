import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { HomeComponent } from './home.component';
import { NzListModule } from 'ng-zorro-antd/list';
// import { AuthGuardService } from '../auth/auth-guard.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule,
    NzListModule,
    RouterModule.forChild([{
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'start',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./start/start.module')
            .then(m => m.StartModule)
        },
        {
          path: 'vehicles',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule)
        },
        {
          path: 'employees',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
        },
        {
          path: 'account',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
        },
        {
          path: 'profile',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
        },
        {
          path: 'bankdetails',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./bankdetails/bankdetails.module.js').then(m => m.BankdetailsModule)
        },
        {
          path: 'locations',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule)
        },
        {
          path: 'contact',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
        },
        {
          path: 'newTour',
          // canActivate: [AuthGuardService],
          loadChildren: () => import('./tour-plan/tour-plan.module').then(m => m.TourPlanModule)
        },
      ]
    }]),
  ],
})
export class HomeModule { }
