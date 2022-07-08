import { createAction, props } from '@ngrx/store';

export const setTab = createAction(
    '[Tabs] Tab Changed',
    props<{ tabIndex: Readonly<number> }>()
);