import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

import { MoviesService } from '@app/movies/services';
import { MoviesCollectionApiActions } from '@app/movies/actions';
import * as fromMovies from '@app/movies/reducers';

@Injectable({
  providedIn: 'root'
})
export class MovieExistsGuard implements CanActivate {
  constructor(
    private store: Store<fromMovies.State>,
    private moviesService: MoviesService
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    // TODO: use @ngrx/router-store selector
    const movieId = route.paramMap.get('movieId');
    return this.hasMovie(movieId);
  }

  private hasMovie(id: string): Observable<boolean> {
    return this.hasMovieInStore(id).pipe(
      switchMap(inStore => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasMovieInApi(id);
      })
    );
  }

  private hasMovieInStore(id: string): Observable<boolean> {
    return this.store.pipe(
      select(fromMovies.getMoviesCollectionEntities),
      map(entities => !!entities[id]),
      take(1)
    );
  }

  private hasMovieInApi(id: string): Observable<boolean> {
    return this.moviesService.getMovie(id).pipe(
      map(movie => MoviesCollectionApiActions.loadMovieSuccess({ movie })),
      tap(action => this.store.dispatch(action)),
      map(movie => !!movie),
      catchError(({ error }) => {
        this.store.dispatch(MoviesCollectionApiActions.loadMovieFailure(error));
        // TODO: dispatch 404 redirect
        return of(false);
      })
    );
  }
}
