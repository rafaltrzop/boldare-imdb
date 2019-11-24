import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { MovieDetailsPageActions } from '@app/movies/actions';
import * as fromMovies from '@app/movies/reducers';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit {
  movie$ = this.store.pipe(select(fromMovies.getSelectedMovie));
  actors$ = this.store.pipe(select(fromMovies.getSelectedMovieActors));

  constructor(private store: Store<fromMovies.State>) {}

  ngOnInit(): void {
    this.loadActors();
  }

  private loadActors(): void {
    this.store
      .pipe(select(fromMovies.getSelectedMovie))
      .subscribe(movie => {
        movie.actors.map(actor => {
          this.store.dispatch(
            MovieDetailsPageActions.loadActor({ id: actor.imdbId })
          );
        });
      })
      .unsubscribe();
  }
}
