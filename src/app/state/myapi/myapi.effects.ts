import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  fetchMyApi,
  fetchMyApiOK,
  fetchMyApiERROR
} from "./myapi.actions";
import { map, switchMap, catchError } from "rxjs/operators";
import { of } from "rxjs";
import { MyApi } from "../../models/myapi";
import { MyApiService } from "src/app/services/myapi.service";

@Injectable()
export class MyApiEffects {

  constructor(private actions$: Actions, private myapiService: MyApiService) {}

  fetchMyApi$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchMyApi),
      switchMap((action) =>
        this.myapiService.get().pipe(
          map((myapi: MyApi[]) => fetchMyApiOK({ myapi: myapi })),
          catchError((error) => of(fetchMyApiERROR(error)))
        )
      )
    )
  );
}