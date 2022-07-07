import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterListModel } from '../../../models/character-list.model';
import { CharacterInfoModel } from '../../../models/character-info.model';

@Injectable()
export class CharacterService {

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(): Observable<CharacterListModel> {
    return this.httpClient.get<CharacterListModel>('https://rickandmortyapi.com/api/character');
  }

  getCharacter(characterId: string): Observable<CharacterInfoModel> {
    return this.httpClient.get<CharacterInfoModel>('https://rickandmortyapi.com/api/character/'+characterId);
  }

  getCharactersByPageUrl(urlPage: string) {
    return this.httpClient.get<CharacterListModel>(urlPage);
  }
  getCharactersByPageNumber(pageNum: number) {
    return this.httpClient.get<CharacterListModel>('https://rickandmortyapi.com/api/character?page=' + pageNum);
  }
}
