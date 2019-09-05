import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { combineLatest, Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import * as fromAuth from '@app/auth/reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromAuth.State>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return combineLatest(
      this.store.select(fromAuth.getLoggedIn),
      this.store.select(fromAuth.getToken)
    ).pipe(
      map(([isLoggedIn, token]) =>
        isLoggedIn
          ? req.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
            })
          : req
      ),
      mergeMap(newReq => next.handle(newReq))
    );
  }
}
