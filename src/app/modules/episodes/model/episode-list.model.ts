import { InfoPages } from "src/app/models/app.state.model";
import { EpisodeInfoModel } from './episode-info.model';

export interface EpisodeListModel {
    info: InfoPages,
    results: EpisodeInfoModel[]
}