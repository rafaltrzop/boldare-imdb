import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { MoviesCollectionPageActions } from '@app/movies/actions';
import * as fromMovies from '@app/movies/reducers';

@Component({
  selector: 'app-movies-collection-page',
  templateUrl: './movies-collection-page.component.html',
  styleUrls: ['./movies-collection-page.component.scss']
})
export class MoviesCollectionPageComponent implements OnInit {
  movies$ = this.store.pipe(select(fromMovies.getMovies));

  constructor(private store: Store<fromMovies.State>) {}

  ngOnInit(): void {
    this.store.dispatch(MoviesCollectionPageActions.loadMovies());
  }
}
