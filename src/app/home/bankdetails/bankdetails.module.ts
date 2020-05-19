import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BankdetailsComponent} from './bankdetails.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [BankdetailsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: BankdetailsComponent }
    ])
  ]
})
export class BankdetailsModule { }
