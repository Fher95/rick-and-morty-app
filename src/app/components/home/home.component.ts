import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.onSelectTab(0);
  }

  title = 'rick-and-morty-app';
  selectedTab = 0;

  public onSelectTab(tabIndex: number): void {
    this.selectedTab = tabIndex;
  }

  public activeTab(tabIndex: number): string {
    return this.selectedTab == tabIndex ? 'active' : '';
  }

}
