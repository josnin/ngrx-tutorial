import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { MyApiEffects } from "./myapi.effects";
import * as fromMyApi from "./myapi.reducer";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMyApi.myapiFeatureKey,
      fromMyApi.myapiReducer
    ),
    EffectsModule.forFeature([MyApiEffects]),
  ],
  declarations: [],
})
export class MyApiStateModule {}