import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rick-and-morty-app';
  selectedTab = 0;

  public onSelectTab(tabIndex: number): void {
    this.selectedTab = tabIndex;
  }

  public activeTab(tabIndex: number): string {
    return this.selectedTab == tabIndex ? 'active' : '';
  }
}
