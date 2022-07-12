import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { retrievedCharacterList } from '../state/character.actions';
import { CharacterListModel } from 'src/app/modules/characters/models/character-list.model';
import { AppRickMortyStateModel, SearchParamsModel } from 'src/app/models/app.state.model';
import { setTab } from 'src/app/state/app.actions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService, private store: Store<AppRickMortyStateModel>) { }

  characterList: CharacterListModel | any;
  currentPage = 1;
  numberOfPages = 0;
  lastNameSearch: string | null = null;

  ngOnInit(): void {
    this.listenToListChange();
    this.loadCharacterListParams(1);
    this.listenToSearchName();
    this.store.dispatch(setTab({ tabIndex: 0 }));
  }

  private listenToSearchName() {
    this.store.select('searchName')
      .pipe(tap(
        text => { this.loadCharacterListParams(1, text); this.lastNameSearch = text }
      ))
      .subscribe()
  }

  private listenToListChange() {
    this.store.select('characterList')
      .pipe(
        tap((characterListObject) => {
          this.characterList = characterListObject;
          this.numberOfPages = characterListObject.info.pages;
        }))
      .subscribe();
  }

  private loadCharacterListParams(pageNumber: number, searchText?: string | null) {
    const paramsQuery: SearchParamsModel = { page: pageNumber, name: searchText !== '' ? searchText : null }
    this.characterService.getCharactersWithParams(paramsQuery).pipe(
      tap(characterList => {
        this.currentPage = pageNumber;
        const action = retrievedCharacterList({ characterList: characterList });
        this.store.dispatch(action);
      })
    )
      .subscribe();
  }

  public onGoToPage(pageNumber: number) {
    this.loadCharacterListParams(pageNumber, this.lastNameSearch);
  }

}
