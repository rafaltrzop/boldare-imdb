import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { MoviesParams } from '@app/movies/models';
import { MoviesCollectionPageActions } from '@app/movies/actions';
import * as fromMovies from '@app/movies/reducers';

@Component({
  selector: 'app-movies-collection-page',
  templateUrl: './movies-collection-page.component.html',
  styleUrls: ['./movies-collection-page.component.scss']
})
export class MoviesCollectionPageComponent {
  isLoading$ = this.store.pipe(select(fromMovies.getMoviesCollectionIsLoading));
  movies$ = this.store.pipe(select(fromMovies.getMoviesCollection));
  moviesTotal$ = this.store.pipe(select(fromMovies.getMoviesCollectionTotal));

  constructor(private store: Store<fromMovies.State>) {}

  loadMovies(params: MoviesParams): void {
    this.store.dispatch(MoviesCollectionPageActions.loadMovies({ params }));
  }
}
