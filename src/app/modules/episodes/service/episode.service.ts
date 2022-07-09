import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchParamsModel } from 'src/app/models/app.state.model';
import { getCleanParams } from 'src/app/models/utils';
import { EpisodeListModel } from '../model/episode-list.model';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient: HttpClient) { }

  getEpisodesWithParams(objectParams: SearchParamsModel) {
    return this.httpClient.get<EpisodeListModel>('https://rickandmortyapi.com/api/episode/', { params: getCleanParams(objectParams) });
  }
}
