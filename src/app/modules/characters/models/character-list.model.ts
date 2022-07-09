import { InfoPages } from 'src/app/models/app.state.model';
import { CharacterInfoModel } from './character-info.model';
export interface CharacterListModel {
    info: InfoPages,
    results: CharacterInfoModel[]
  }