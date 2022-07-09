import { createReducer, on } from '@ngrx/store';
import { EpisodeListModel } from "../model/episode-list.model";
import { retrievedEpisodesList } from './episode.actions';

const initialInfo = { count: 0, pages: 0, next: '', prev: '' }
const initialState: Readonly<EpisodeListModel> = { info: initialInfo, results: [] };

export const episodesReducer = createReducer(
    initialState,
    on(retrievedEpisodesList, (state, { episodeList }) => episodeList)
);