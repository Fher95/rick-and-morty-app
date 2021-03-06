import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharacterService } from './services/character.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  providers: [CharacterService],
  declarations: [
    CharacterListComponent,
    CharacterDetailComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class CharactersModule { }
