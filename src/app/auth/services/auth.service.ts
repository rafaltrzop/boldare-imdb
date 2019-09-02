import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Credentials, Token } from '@app/auth/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(credentials: Credentials): Observable<Token> {
    return this.http.post<Token>(
      `${environment.apiUrl}/auth/login`,
      credentials
    );
  }
}
