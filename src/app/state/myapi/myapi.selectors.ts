import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromMyApi from "./myapi.reducer";

const getMyApiState = createFeatureSelector<fromMyApi.State>(
  fromMyApi.myapiFeatureKey
);

export const selectMyApi = createSelector(
  getMyApiState,
  (state: fromMyApi.State) => state.myapi
);

export const selectError = createSelector(
  getMyApiState,
  (state) => state.error
);