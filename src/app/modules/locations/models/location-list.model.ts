import { InfoPages } from "src/app/models/app.state.model";
import { LocationInfoModel } from './location-info.model';

export interface LocationListModel {
    info: InfoPages,
    results: LocationInfoModel[]
  }