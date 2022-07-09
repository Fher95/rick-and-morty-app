import { createReducer, on } from '@ngrx/store';
import { LocationListModel } from '../models/location-list.model';
import { retrievedLocationsList } from './location.actions';
const initialInfo = { count: 0, pages: 0, next: '', prev: '' }
const initialState: Readonly<LocationListModel> = { info: initialInfo, results: [] };

export const locationsReducer = createReducer(
  initialState,
  on(retrievedLocationsList, (state, { locationList }) => locationList)
);