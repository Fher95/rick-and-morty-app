import { createAction, props } from '@ngrx/store';
import { EpisodeListModel } from '../model/episode-list.model';

export const retrievedEpisodesList = createAction(
    '[Episodes List/API] Retrieve Episodes Success',
    props<{ episodeList: Readonly<EpisodeListModel> }>()
);

export const searchEpisodesByName = createAction(
    '[Episodes Search] Searched Episodes By Name',
    props<{ searchName: Readonly<string> }>()
);