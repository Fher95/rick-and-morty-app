import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { tabsReducer, searchReducer } from './state/app.reducers';
import { charactersReducer } from './modules/characters/state/character.reducer';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { locationsReducer } from './modules/locations/state/locations.reducers';
import { episodesReducer } from './modules/episodes/state/episode.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(
      {tabIndex: tabsReducer,characterList: charactersReducer, searchName: searchReducer, locationsList: locationsReducer, episodesList: episodesReducer}
      ),
    ReactiveFormsModule,
    FormsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),

    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
