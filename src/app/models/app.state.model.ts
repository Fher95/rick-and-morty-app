import { CharacterListModel } from './character-list.model';
import { TabsEnum } from './tabs-enum';
export interface AppRickMortyState {
    characterList: CharacterListModel
    currentCharactersPage: number,
    currentLocationsPage: number,
    currentEpisodesPage: number,
    tabIndex: TabsEnum,
}