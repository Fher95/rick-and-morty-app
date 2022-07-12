import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { setTab } from 'src/app/state/app.actions';
import { LocationService } from '../service/location.service';
import { LocationListModel } from '../models/location-list.model';
import { retrievedLocationsList } from '../state/location.actions';
import { AppRickMortyStateModel, SearchParamsModel } from 'src/app/models/app.state.model';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  public locationsList: LocationListModel | null = null;
  currentPage = 1;
  numberOfPages = 0;
  lastNameSearch: string | null = null;

  constructor(private locationService: LocationService, private store: Store<AppRickMortyStateModel>) { }

  ngOnInit(): void {
    this.listenToListChange();
    this.loadLocationListParams(1);
    this.listenToSearchName();
    this.store.dispatch(setTab({ tabIndex: 1 }))
  }

  private listenToSearchName() {
    this.store.select('searchName')
      .pipe(tap(
        text => { this.loadLocationListParams(1, text); this.lastNameSearch = text }
      ))
      .subscribe()
  }

  private listenToListChange() {
    this.store.select('locationsList')
      .pipe(
        tap((locationsListObject) => {
          this.locationsList = locationsListObject;
          this.numberOfPages = locationsListObject.info.pages;
        }))
      .subscribe();
  }

  private loadLocationListParams(pageNumber: number, searchText?: string | null) {
    const paramsQuery: SearchParamsModel = { page: pageNumber, name: searchText !== '' ? searchText : null }
    this.locationService.getLocationsWithParams(paramsQuery).pipe(
      tap(locList => {
        this.currentPage = pageNumber;
        const action = retrievedLocationsList({ locationList: locList });
        this.store.dispatch(action);
      })
    )
      .subscribe();
  }

  public onGoToPage(pageNumber: number) {
    this.loadLocationListParams(pageNumber, this.lastNameSearch);
  }

}
