import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/start',
    pathMatch: 'full'
  }, {
    path: 'login',
    loadChildren: () => import('./login/login.module')
      .then(m => m.LoginModule)
  }, {
    path: 'forgot-password',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./forgot-password/forgot-password.module')
      .then(m => m.ForgotPasswordModule)
  }, {
    path: 'register',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./forgot-password/forgot-password.module')
      .then(m => m.ForgotPasswordModule)
  }, {
    path: 'new-password',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./set-new-password/set-new-password.module')
      .then(m => m.SetNewPasswordModule)
  }, {
    path: 'contract',
    // canActivate: [AuthGuardService],
    loadChildren: () => import('./contract-forms/form-stepper.module')
      .then(m => m.FormStepperModule)
  }, {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./home/home.module')
      .then(m => m.HomeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
