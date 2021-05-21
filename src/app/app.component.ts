import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyApi } from './models/myapi';
import { selectMyApi, fetchMyApi } from './state/myapi';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myapi$: Observable<any>;
  error$: Observable<any>;
  title = 'ngrx-tutorial';

  constructor(private store: Store<{}>) {
  }

  ngOnInit(): void {
    this.store.dispatch(fetchMyApi());
    this.myapi$ = this.store.pipe(select(selectMyApi));
    this.myapi$.subscribe(res => {
      console.log(res)
    })
  }


}
