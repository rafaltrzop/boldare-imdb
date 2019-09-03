import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthActions } from '@app/auth/actions';
import * as fromAuth from '@app/auth/reducers';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuth.getLoggedIn),
      map(isLoggedIn => {
        if (isLoggedIn) {
          return true;
        }

        this.store.dispatch(AuthActions.loginRedirect());
        return false;
      })
    );
  }
}
