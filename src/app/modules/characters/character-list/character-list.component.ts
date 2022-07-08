import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { tap } from 'rxjs/operators';
import { CharacterListModel } from 'src/app/models/character-list.model';
import { Store } from '@ngrx/store';
import { AppRickMortyState } from '../../../models/app.state.model';
import { retrievedCharacterList } from '../state/character.actions';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService, private store: Store<AppRickMortyState>) { }

  characterList: CharacterListModel | any;
  previousPage = 0;
  currentPage = 1;
  nextPage = 2;
  numberOfPages = 0;

  ngOnInit(): void {
    this.listenToListChange();
    this.loadCharacterListPage(1);
  }

  private listenToListChange() {
    this.store.select('characterList')
      .pipe(
        tap((characterListObject) => 
        { 
          this.characterList = characterListObject;
          this.numberOfPages = this.numberOfPages === 0 ? characterListObject.info.pages : this.numberOfPages;
        }))
      .subscribe();
  }

  onNextPage() {
    if (this.currentPage < this.numberOfPages) {
      this.currentPage++;
      this.loadCharacterListPage(this.currentPage);
    }
  }

  loadCharacterListPage(pageNumber: number) {
    this.setPageNumbers(pageNumber);
    this.characterService.getCharactersByPageNumber(pageNumber).pipe(
      tap(res => {
        const action = retrievedCharacterList({ characterList: res });
        this.store.dispatch(action);
      })
    )
      .subscribe();
  }

  onPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadCharacterListPage(this.currentPage);
    }
  }

  extractPageNumberFromPath(urlNextPage: string) {
    return Number(urlNextPage.substring(urlNextPage.indexOf('=') + 1));
  }

  setPageNumbers(currentPage: number) {
    this.previousPage = currentPage - 1;
    this.nextPage = currentPage + 1;
  }
}
