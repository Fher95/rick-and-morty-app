import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { setTab } from './app.actions';
import { TabsEnum } from '../models/tabs-enum';
import { searchCharacterByName } from '../modules/characters/state/character.actions';
import { searchLocationsByName } from '../modules/locations/state/location.actions';
import { searchEpisodesByName } from '../modules/episodes/state/episode.actions';
import { AppRickMortyStateModel } from 'src/app/models/app.state.model';
import { charactersReducer } from '../modules/characters/state/character.reducer';
import { locationsReducer } from '../modules/locations/state/locations.reducers';
import { episodesReducer } from '../modules/episodes/state/episode.reducers';

const initialState = TabsEnum.CHARACTERS;

export const tabsReducer = createReducer(
    initialState,
    on(setTab, (state, { tabIndex }) => tabIndex)
);

export const searchReducer = createReducer(
    '',
    on(searchCharacterByName, (state, { searchName }) => searchName),
    on(searchLocationsByName, (state, { searchName }) => searchName),
    on(searchEpisodesByName, (state, { searchName }) => searchName),
);

export const appReducers: ActionReducerMap<AppRickMortyStateModel> = {
    tabIndex: tabsReducer, 
    characterList: charactersReducer, 
    searchName: searchReducer, 
    locationsList: locationsReducer, 
    episodesList: episodesReducer
};
