import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { getCleanParams } from 'src/app/models/utils';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SearchParamsModel } from 'src/app/models/app.state.model';
import { CharacterInfoModel } from '../models/character-info.model';
import { CharacterListModel } from '../models/character-list.model';

@Injectable()
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(): Observable<CharacterListModel> {
    return this.httpClient.get<CharacterListModel>('https://rickandmortyapi.com/api/character');
  }

  getCharacter(characterId: string): Observable<CharacterInfoModel> {
    return this.httpClient.get<CharacterInfoModel>('https://rickandmortyapi.com/api/character/' + characterId);
  }

  getCharactersByPageUrl(urlPage: string) {
    return this.httpClient.get<CharacterListModel>(urlPage);
  }
  getCharactersByPageNumber(pageNum: number) {
    const queryParams = new HttpParams().append('page', pageNum);
    return this.httpClient.get<CharacterListModel>('https://rickandmortyapi.com/api/character', { params: queryParams });
  }
  getCharactersByName(name: string) {
    const queryParams = new HttpParams().append('name', name);
    return this.httpClient.get<CharacterListModel>('https://rickandmortyapi.com/api/character/', { params: queryParams });
  }

  getCharactersWithParams(objectParams: SearchParamsModel) {
    return this.httpClient.get<CharacterListModel>('https://rickandmortyapi.com/api/character/', { params: getCleanParams(objectParams) })
  }

}
