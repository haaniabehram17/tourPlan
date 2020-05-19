import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VehiclesComponent} from './vehicles.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';



@NgModule({
  declarations: [VehiclesComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    RouterModule.forChild([
      { path: '', component: VehiclesComponent }
    ])
  ]
})
export class VehiclesModule { }
