import { CharacterListModel } from './character-list.model';
import { TabsEnum } from './tabs-enum';
export interface AppRickMortyStateModel {
    characterList: CharacterListModel
    // currentCharactersPage: number,
    // currentLocationsPage: number,
    // currentEpisodesPage: number,
    tabIndex: TabsEnum,
    searchName: string
}

export interface SearchParamsModel {
    name: string | null | undefined,
    page: number
}