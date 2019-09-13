import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthGuardActions } from '@app/auth/actions';
import * as fromAuth from '@app/auth/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router, private store: Store<fromAuth.State>) {}

  canLoad(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        }

        this.store.dispatch(AuthGuardActions.loginPageRedirect());
        return false;
      }),
      take(1)
    );
  }
}
