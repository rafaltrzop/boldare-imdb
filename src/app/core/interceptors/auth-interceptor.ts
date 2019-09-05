import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, take } from 'rxjs/operators';

import * as fromAuth from '@app/auth/reducers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromAuth.State>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.pipe(
      select(fromAuth.getToken),
      take(1),
      map(token =>
        !!token
          ? req.clone({
              setHeaders: { Authorization: `Bearer ${token}` }
            })
          : req
      ),
      mergeMap(newReq => next.handle(newReq))
    );
  }
}
