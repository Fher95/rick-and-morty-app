import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { retrievedCharacterList } from '../state/character.actions';
import { CharacterListModel } from 'src/app/models/character-list.model';
import { AppRickMortyStateModel, SearchParamsModel } from 'src/app/models/app.state.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService, private store: Store<AppRickMortyStateModel>) { }

  characterList: CharacterListModel | any;
  previousPage = 0;
  currentPage = 1;
  nextPage = 2;
  numberOfPages = 0;
  lastNameSearch: string | null = null;

  ngOnInit(): void {
    this.listenToListChange();
    this.loadCharacterListParams(1);
    this.listenToSearchName();
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
    this.setPageNumbers(pageNumber);
    const paramsQuery: SearchParamsModel = { page: pageNumber, name: searchText !== '' ? searchText : null }
    this.characterService.getCharactersWithParams(paramsQuery).pipe(
      tap(characterList => {
        const action = retrievedCharacterList({ characterList: characterList });
        this.store.dispatch(action);
      })
    )
      .subscribe();
  }

  private setPageNumbers(newCurrentPage: number) {
    this.currentPage = newCurrentPage;
    this.previousPage = newCurrentPage - 1;
    this.nextPage = newCurrentPage + 1;
  }

  public onPreviousPage() {
    if (this.currentPage > 1) {
      this.loadCharacterListParams(this.currentPage - 1, this.lastNameSearch);
    }
  }

  public onNextPage() {
    if (this.currentPage < this.numberOfPages) {
      this.loadCharacterListParams(this.currentPage + 1, this.lastNameSearch);
    }
  }

  public onFirstPage() {
    this.loadCharacterListParams(1, this.lastNameSearch);

  }

  public onLastPage() {
    this.loadCharacterListParams(this.numberOfPages, this.lastNameSearch);
  }

}
