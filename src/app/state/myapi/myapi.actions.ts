import { createAction, props } from "@ngrx/store";
import { MyApi } from "../../models/myapi";

export const fetchMyApi = createAction(
  "[MyAPI] Fetch MyAPI"
);

export const fetchMyApiOK = createAction(
    "[MyAPI] Fetch MyAPI OK",
    props<{ myapi: MyApi[] }>()
);

export const fetchMyApiERROR = createAction(
    "[MyAPI] Fetch MyAPI ERROR",
    props<{ message: string }>()
);