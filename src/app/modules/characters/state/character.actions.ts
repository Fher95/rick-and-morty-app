import { createAction, props } from '@ngrx/store';
import { CharacterListModel } from 'src/app/models/character-list.model';

export const INCREMENTAR = '[Contador] Incrementar';
export const SET_CHARACTER_LIST = '[Characters] SetList';
export const SET_TAB = '[Characters] SetTab';

export const retrievedCharacterList = createAction(
    '[Characters List/API] Retrieve Characters Success',
    props<{ characterList: Readonly<CharacterListModel> }>()
);

export const searchCharacterByName = createAction(
    '[Characters Search] Searched Characters By Name',
    props<{ searchName: Readonly<string> }>()
);