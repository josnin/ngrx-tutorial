import { fetchMyApiOK, fetchMyApiERROR } from "./myapi.actions";
import { on, createReducer, createSelector, Action } from "@ngrx/store";
import { MyApi } from "../../models/myapi";

export interface State {
  myapi: MyApi[];
  error: string;
}

export const initialState: State = {
  myapi: [],
  error: "",
};

export const myapiReducer = createReducer(
  initialState,
  on(fetchMyApiOK, (state, action) => ({
    ...state,
    myapi: action.myapi,
  })),
  on(fetchMyApiERROR, (state, action) => ({
    ...state,
    error: action.message,
  }))
);

export const myapiFeatureKey = "myapi";

export function reducer(state: State | undefined, action: Action) {
  console.log(state, action)
  return myapiReducer(state, action);
}