import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthActions } from '@app/auth/actions';
import * as fromAuth from '@app/auth/reducers';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromAuth.State>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.store.dispatch(AuthActions.logout());
        }
        return throwError(error);
      })
    );
  }
}
