
import { createReducer, on } from '@ngrx/store';
import { CharacterListModel } from 'src/app/modules/characters/models/character-list.model';
import { retrievedCharacterList } from './character.actions';

const initialInfo = { count: 0, pages: 0, next: '', prev: '' }
const initialState: Readonly<CharacterListModel> = { info: initialInfo, results: [] };

export const charactersReducer = createReducer(
  initialState,
  on(retrievedCharacterList, (state, { characterList }) => characterList)
);