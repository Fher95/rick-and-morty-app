import { Injectable } from '@angular/core';
import { SearchParamsModel } from 'src/app/models/app.state.model';
import { HttpClient } from '@angular/common/http';
import { LocationListModel } from '../models/location-list.model';
import { getCleanParams } from 'src/app/models/utils';

@Injectable()
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  getLocationsWithParams(objectParams: SearchParamsModel) {
    return this.httpClient.get<LocationListModel>('https://rickandmortyapi.com/api/location/', { params: getCleanParams(objectParams) });
  }
}
