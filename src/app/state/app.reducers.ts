import { createReducer, on } from '@ngrx/store';
import { setTab } from './app.actions';
import { TabsEnum } from '../models/tabs-enum';
import { searchCharacterByName } from '../modules/characters/state/character.actions';

const initialState: TabsEnum = TabsEnum.CHARACTERS;

export const tabsReducer = createReducer(
    initialState,
    on(setTab, (state, { tabIndex }) => tabIndex)
);

export const searchReducer = createReducer(
    '',
    on(searchCharacterByName, (state, { searchName }) => searchName),
    // on(searchLocationsByName, (state, { searchName }) => searchName),
    // on(searchEpisodesByName, (state, { searchName }) => searchName),
);