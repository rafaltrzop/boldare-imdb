import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AuthActions } from '@app/auth/actions';
import * as fromAuth from '@app/auth/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoggedIn$ = this.store.pipe(select(fromAuth.getLoggedIn));

  constructor(private store: Store<fromAuth.State>) {}

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
