import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { LocationListModel } from '../models/location-list.model';
import { tap } from 'rxjs/operators';
import { AppRickMortyStateModel, SearchParamsModel } from 'src/app/models/app.state.model';
import { Store } from '@ngrx/store';
import { retrievedLocationsList } from '../state/location.actions';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {

  public locationsList: LocationListModel | null = null ;
  previousPage = 0;
  currentPage = 1;
  nextPage = 2;
  numberOfPages = 0;
  lastNameSearch: string | null = null;

  constructor(private locationService: LocationService, private store: Store<AppRickMortyStateModel>) { }

  ngOnInit(): void {
    this.listenToListChange();
    this.loadLocationListParams(1);
    this.listenToSearchName();
    // this.locationService.getLocationsWithParams({page:1, name: null})
    // .pipe(tap(
    //   listLocations => {this.locationsList = listLocations} 
    // ))
    // .subscribe();
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
          debugger
          this.locationsList = locationsListObject;
          this.numberOfPages = locationsListObject.info.pages;
        }))
      .subscribe();
  }

  private loadLocationListParams(pageNumber: number, searchText?: string | null) {
    debugger
    this.setPageNumbers(pageNumber);
    const paramsQuery: SearchParamsModel = { page: pageNumber, name: searchText !== '' ? searchText : null }
    this.locationService.getLocationsWithParams(paramsQuery).pipe(
      tap(locList => {
        const action = retrievedLocationsList({ locationList: locList });
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
