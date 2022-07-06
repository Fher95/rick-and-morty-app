import { CharacterInfoModel } from './character-info.model';
export interface CharacterListModel {
    info: {
      count: number,
      pages: number,
      next: string,
      prev: string
    },
    results: CharacterInfoModel[]
  }