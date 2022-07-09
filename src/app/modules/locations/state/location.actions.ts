import { createAction, props } from '@ngrx/store';
import { LocationListModel } from '../models/location-list.model';

export const retrievedLocationsList = createAction(
    '[Locations List/API] Retrieve Locations Success',
    props<{ locationList: Readonly<LocationListModel> }>()
);

export const searchLocationsByName = createAction(
    '[Locations Search] Searched Locations By Name',
    props<{ searchName: Readonly<string> }>()
);