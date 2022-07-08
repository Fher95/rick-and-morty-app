import { Component, OnInit } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppRickMortyState } from '../../models/app.state.model';
// import { SetTabAction } from '../../modules/characters/state/character.actions';
import { setTab } from '../../state/app.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store<AppRickMortyState>) { 
    this.store.select('tabIndex').subscribe(currentTabIndex => this.selectedTab = currentTabIndex);
  }

  ngOnInit(): void {
    this.onSelectTab(0);
  }

  title = 'rick-and-morty-app';
  selectedTab = 0;

  public onSelectTab(tabIndex: number): void {
    const action = setTab({tabIndex});
    this.store.dispatch(action);
  }

  public activeTab(tabIndex: number): string {
    return this.selectedTab == tabIndex ? 'active' : '';
  }

}
