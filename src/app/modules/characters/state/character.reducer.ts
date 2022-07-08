
import { AppRickMortyState } from '../../../models/app.state.model';
import { createReducer, on } from '@ngrx/store';
import { CharacterListModel } from 'src/app/models/character-list.model';
import { retrievedCharacterList } from './character.actions';

// let defaultState: AppRickMortyState = {
//     characterList: undefined,
//     currentCharactersPage: 1,
//     currentEpisodesPage: undefined,
//     currentLocationsPage: undefined,
//     currentTab: 0
// }

// export function charactersReducer(state: AppRickMortyState = defaultState, action: actions) {
//     switch (action.type) {
//         case SET_TAB:
//             console.log('Se está incrementando!')
//             return state.currentTab = action.payload;
//         case INCREMENTAR:
//             return state;
//         default:
//             return state;
//     }
    

// }
const initialInfo = {count:0,pages:0,next:'',prev:''}
const initialState: Readonly<CharacterListModel> = {info: initialInfo, results: []};

export const charactersReducer = createReducer(
  initialState,
  on(retrievedCharacterList, (state, { characterList }) => {console.log('Lista recup: ', characterList);return characterList})
);