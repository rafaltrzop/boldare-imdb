import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Collection } from '@app/core/models';
import { Movie, MoviesParams } from '@app/movies/models';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${environment.apiUrl}/movies/${id}`);
  }

  getMovies({
    limit,
    page,
    sortBy,
    sortDir
  }: MoviesParams): Observable<Collection<Movie>> {
    let params = new HttpParams()
      .set('limit', `${limit}`)
      .set('page', `${page}`);

    if (sortBy && sortDir) {
      const sortDirMap = {
        asc: '1',
        desc: '-1'
      };
      params = params.set('sortBy', sortBy).set('sortDir', sortDirMap[sortDir]);
    }

    return this.http.get<Collection<Movie>>(`${environment.apiUrl}/movies`, {
      params
    });
  }
}
