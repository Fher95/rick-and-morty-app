import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectTabIndex } from 'src/app/state/app.selectors';
import { searchCharacterByName } from 'src/app/modules/characters/state/character.actions';
import { tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { setTab } from 'src/app/state/app.actions';
import { AppRickMortyStateModel } from 'src/app/models/app.state.model';
import { TabsEnum } from 'src/app/models/tabs-enum';
import { searchLocationsByName } from '../../modules/locations/state/location.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selectedTab = 0;
  public searchForm = this.fb.group({ searchWord: '' });

  constructor(private fb: FormBuilder, private store: Store<AppRickMortyStateModel>) {
    this.store.select('tabIndex').subscribe(currentTabIndex => this.selectedTab = currentTabIndex);
  }

  ngOnInit(): void {
    this.onSelectTab(0);
  }

  public onSelectTab(tabIndex: number): void {
    const action = setTab({ tabIndex });
    this.store.dispatch(action);
  }

  public activeTab(tabIndex: number): string {
    return this.selectedTab == tabIndex ? 'active' : '';
  }

  public onSearchButton() {
    this.store.select(selectTabIndex)
      .pipe(tap(
        {
          next: (selectedIndex) => {
            let searchText = this.searchForm.get('searchWord')?.value || '';
            let action = null;
            switch (selectedIndex) {
              case TabsEnum.CHARACTERS:
                action = searchCharacterByName({ searchName: searchText });
                break;
              case TabsEnum.LOCATIONS:
                action = searchLocationsByName({ searchName: searchText });
                break;
              // case TabsEnum.CHARACTERS:
              //   action = searchCharacterByName({ searchName: searchText });
              //   break;
            
              default:
                break;
            }
            if (action !== null) {
              this.store.dispatch(action);
            }
          },
          error: () => {
            console.log('Characters not found!');
          }
        }
      ))
      .subscribe();
  }
}
