import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { LocationService } from './service/location.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

@NgModule({
  providers: [LocationService],
  declarations: [
    LocationListComponent,
    LocationCardComponent,
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule
  ]
})
export class LocationsModule { }
