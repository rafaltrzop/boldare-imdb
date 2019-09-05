import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Movie } from '@app/movies/models';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<{ collection: Movie[]; total: number }> {
    return this.http.get<{ collection: Movie[]; total: number }>(
      `${environment.apiUrl}/movies`
    );
  }
}
