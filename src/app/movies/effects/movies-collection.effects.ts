import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { MoviesService } from '@app/movies/services';
import {
  MoviesCollectionApiActions,
  MoviesCollectionPageActions
} from '@app/movies/actions';
import { Movie } from '@app/movies/models';

@Injectable()
export class MoviesCollectionEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MoviesCollectionPageActions.loadMovies),
      switchMap(() =>
        this.moviesService.getMovies().pipe(
          map(
            ({
              collection: movies,
              total
            }: {
              collection: Movie[];
              total: number;
            }) =>
              MoviesCollectionApiActions.loadMoviesSuccess({
                movies,
                total
              })
          ),
          catchError(error =>
            of(MoviesCollectionApiActions.loadMoviesFailure({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private moviesService: MoviesService
  ) {}
}
