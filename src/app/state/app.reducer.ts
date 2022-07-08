import { createReducer, on } from '@ngrx/store';
import { setTab } from './app.actions';
import { TabsEnum } from '../models/tabs-enum';

const initialState: TabsEnum = TabsEnum.CHARACTERS;

export const tabsReducer = createReducer(
    initialState,
    on(setTab, (state, { tabIndex }) => tabIndex)
);