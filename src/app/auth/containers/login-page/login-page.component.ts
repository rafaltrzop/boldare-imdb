import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Credentials } from '@app/auth/models';
import { LoginPageActions } from '@app/auth/actions';
import * as fromAuth from '@app/auth/reducers';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loading$ = this.store.pipe(select(fromAuth.getLoginPageLoading));
  error$ = this.store.pipe(select(fromAuth.getLoginPageError));

  constructor(private store: Store<fromAuth.State>) {}

  login(credentials: Credentials) {
    this.store.dispatch(LoginPageActions.login({ credentials }));
  }
}
