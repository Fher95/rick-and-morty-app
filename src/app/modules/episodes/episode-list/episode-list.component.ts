import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { EpisodeService } from '../service/episode.service';
import { EpisodeListModel } from '../model/episode-list.model';
import { retrievedEpisodesList } from '../state/episode.actions';
import { AppRickMortyStateModel, SearchParamsModel } from 'src/app/models/app.state.model';
import { setTab } from 'src/app/state/app.actions';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {

  public episodeList: EpisodeListModel | null = null;
  previousPage = 0;
  currentPage = 1;
  nextPage = 2;
  numberOfPages = 0;
  lastNameSearch: string | null = null;

  constructor(private episodeService: EpisodeService, private store: Store<AppRickMortyStateModel>) { }


  ngOnInit(): void {
    this.listenToListChange();
    this.loadLocationListParams(1);
    this.listenToSearchName();
    this.store.dispatch(setTab({ tabIndex: 2 }));
  }

  private listenToSearchName() {
    this.store.select('searchName')
      .pipe(tap(
        text => { this.loadLocationListParams(1, text); this.lastNameSearch = text }
      ))
      .subscribe()
  }

  private listenToListChange() {
    this.store.select('episodesList')
      .pipe(
        tap((episodeListObject) => {
          this.episodeList = episodeListObject;
          this.numberOfPages = episodeListObject.info.pages;
        }))
      .subscribe();
  }

  private loadLocationListParams(pageNumber: number, searchText?: string | null) {
    this.setPageNumbers(pageNumber);
    const paramsQuery: SearchParamsModel = { page: pageNumber, name: searchText !== '' ? searchText : null }
    this.episodeService.getEpisodesWithParams(paramsQuery).pipe(
      tap(episodeListObj => {
        const action = retrievedEpisodesList({ episodeList: episodeListObj });
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
      this.loadLocationListParams(this.currentPage - 1, this.lastNameSearch);
    }
  }

  public onNextPage() {
    if (this.currentPage < this.numberOfPages) {
      this.loadLocationListParams(this.currentPage + 1, this.lastNameSearch);
    }
  }

  public onFirstPage() {
    this.loadLocationListParams(1, this.lastNameSearch);

  }

  public onLastPage() {
    this.loadLocationListParams(this.numberOfPages, this.lastNameSearch);
  }

}
