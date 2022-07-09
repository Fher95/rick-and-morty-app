import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListModel } from '../../../models/character-list.model';
import { CharacterInfoModel } from '../../../models/character-info.model';
import { SearchParamsModel } from '../../../models/app.state.model';

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
    return this.httpClient.get<CharacterListModel>('https://rickandmortyapi.com/api/character/', { params: this.getCleanParams(objectParams) })
  }

  getCleanParams(filter: any) {
    let queryParams = new HttpParams();
    Object.keys(filter).forEach(
      key => filter[key] && (queryParams = queryParams.append(key, filter[key]))
    );
    return queryParams;
  }
}
