import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

        // TODO: negate auth guard for /login page
        // TODO: redirect to login screen action
        this.router.navigate(['/login']);
        return false;
      })
    );
  }
}
