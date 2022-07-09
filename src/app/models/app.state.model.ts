import { CharacterListModel } from '../modules/characters/models/character-list.model';
import { TabsEnum } from './tabs-enum';
import { LocationListModel } from '../modules/locations/models/location-list.model';
import { EpisodeListModel } from '../modules/episodes/model/episode-list.model';
export interface AppRickMortyStateModel {
    characterList: CharacterListModel,
    locationsList: LocationListModel,
    episodesList: EpisodeListModel,
    tabIndex: TabsEnum,
    searchName: string
}

export interface SearchParamsModel {
    name: string | null | undefined,
    page: number
}

export interface InfoPages {
    count: number,
    pages: number,
    next: string,
    prev: string
}