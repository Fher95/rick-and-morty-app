import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../services/character.service';
import { tap } from 'rxjs/operators';
import { CharacterListModel } from 'src/app/models/character-list.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  characterList: CharacterListModel | undefined;
  previousPage = 0;
  currentPage = 1;
  nextPage = 2;
  numberOfPages = 0;

  ngOnInit(): void {
    this.characterService.getCharactersByPageNumber(this.currentPage)
      .pipe(
        tap(res => {
          this.characterList = res;
          this.numberOfPages = this.characterList.info.pages;
        })
      )
      .subscribe();
  }

  onNextPage() {
    if (this.currentPage < this.numberOfPages) {
      this.currentPage++;
      this.loadCharacterListPage(this.currentPage);
    }
  }

  loadCharacterListPage(pageNumber: number) {
    this.setPageNumbers();
    this.characterService.getCharactersByPageNumber(pageNumber).pipe(
      tap(res => {
        this.characterList = res;
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

  setPageNumbers() {
    this.previousPage = this.currentPage - 1;
    this.nextPage = this.currentPage + 1;
    if (this.nextPage > this.numberOfPages) {
      this.nextPage = -1;
    }
    if (this.previousPage < 1) {
      this.previousPage = -1;
    }
  }
}
