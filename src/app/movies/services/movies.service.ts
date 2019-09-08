import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SortDirection } from '@angular/material';
import { Observable } from 'rxjs';

import { Collection } from '@app/core/models';
import { Movie } from '@app/movies/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies({
    limit,
    page,
    sortBy,
    sortDir
  }: {
    limit: number;
    page: number;
    sortBy: string;
    sortDir: SortDirection;
  }): Observable<Collection<Movie>> {
    let params = new HttpParams()
      .set('limit', `${limit}`)
      .set('page', `${page}`);

    if (sortBy && sortDir) {
      const sort = {
        asc: 1,
        desc: -1
      };
      params = params.set('sortBy', sortBy).set('sortDir', `${sort[sortDir]}`);
    }

    return this.http.get<Collection<Movie>>(`${environment.apiUrl}/movies`, {
      params
    });
  }

  // TODO: remove
  getMovies2(): Observable<Collection<Movie>> {
    return this.http.get<Collection<Movie>>(`${environment.apiUrl}/movies`);
  }
}
