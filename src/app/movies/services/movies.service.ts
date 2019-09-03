import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  // TODO: add return type
  getMovies(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/movies`);
  }
}
