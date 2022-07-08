import { createAction, props } from '@ngrx/store';
import { CharacterListModel } from '../../../models/character-list.model';
export const INCREMENTAR = '[Contador] Incrementar';
export const SET_CHARACTER_LIST = '[Characters] SetList';
export const SET_TAB = '[Characters] SetTab';


// export class IncrementarAction implements Action {
//     readonly type = INCREMENTAR;
// }

// export class SetCharacterListAction implements Action {
//     readonly type = SET_CHARACTER_LIST;
// }

// export class SetTabAction implements Action {
//     readonly type = SET_TAB;
//     constructor(public payload: number) { }
// }
// export const addBook = createAction(
//     '[Book List] Add Book',
//     props<{ bookId: string }>()
// );

// export const removeBook = createAction(
//     '[Book Collection] Remove Book',
//     props<{ bookId: string }>()
// );

export const retrievedCharacterList = createAction(
    '[Characters List/API] Retrieve Characters Success',
    props<{ characterList: Readonly<CharacterListModel> }>()
);


// export type actions = retrievedBookList | removeBook | addBook;