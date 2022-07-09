import { createFeatureSelector } from "@ngrx/store";

export const selectTabIndex = createFeatureSelector<Readonly<number>>('tabIndex');