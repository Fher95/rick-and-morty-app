import { Component, Input, OnInit } from '@angular/core';
import { EpisodeInfoModel } from '../model/episode-info.model';

@Component({
  selector: 'app-episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent implements OnInit {

  @Input()
  public episodeInfo: EpisodeInfoModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
