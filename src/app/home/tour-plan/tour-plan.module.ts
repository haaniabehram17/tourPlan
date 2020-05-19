import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule, NzEmptyModule, NzListModule} from 'ng-zorro-antd';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SelectLocationComponent } from './home/select-location/select-location.component';
import { PlanTourComponent } from './home/plan-tour/plan-tour.component';
import { MapComponent } from './home/map/map.component';
import { DetailInfoComponent } from './home/plan-tour/detail-info/detail-info.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {AgmDirectionModule} from 'agm-direction';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {NgxCsvParserModule} from 'ngx-csv-parser';
import {AgmCoreModule} from '@agm/core';
import {TourPlanHomeComponent} from './home/home.component';
import {LocationHanlderService} from './services/locationHandler/location-hanlder.service';
import {GeoLocationsService} from './services/geocodeLocations/geo-locations.service';
import {AuthService} from './services/auth/auth.service';
import { EditDetailsComponent } from './home/plan-tour/detail-info/edit-details/edit-details.component';


@NgModule({
  declarations: [TourPlanHomeComponent, SelectLocationComponent, PlanTourComponent, MapComponent, DetailInfoComponent, EditDetailsComponent],
    imports: [
        CommonModule,
        NgZorroAntdModule,
        NzEmptyModule,
        NzListModule,
        DragDropModule,
        FormsModule,
        ReactiveFormsModule,
        AgmDirectionModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBSnRgN5CCoTWhbcd6NfILLxBaMIaJYU88',
          libraries: ['places']
        }),
        ScrollingModule,
        NgxCsvParserModule,
        RouterModule.forChild([
            {path: '', component: TourPlanHomeComponent}
        ]),
        ReactiveFormsModule
    ],
  providers: [GeoLocationsService, LocationHanlderService, AuthService]
})
export class TourPlanModule { }
