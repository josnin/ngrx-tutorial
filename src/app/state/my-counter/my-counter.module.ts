import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromMyCounter from './my-counter.reducer';

@NgModule({
  imports: [
    StoreModule.forFeature(fromMyCounter.myCounterFeatureKey, fromMyCounter.counterReducer)
  ],
})
export class MyCounterModule {}