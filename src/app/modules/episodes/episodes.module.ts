import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeCardComponent } from './episode-card/episode-card.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodeService } from './service/episode.service';

@NgModule({
  providers: [EpisodeService],
  declarations: [EpisodeListComponent, EpisodeCardComponent],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    HttpClientModule
  ]
})
export class EpisodesModule { }
