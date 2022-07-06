import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { Routes } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';

const routes: Routes = [
  {
    path: '',
    component: LocationListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ]
})
export class LocationsModule { }
