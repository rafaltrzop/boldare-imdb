import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as fromMovies from '@app/movies/reducers';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent {
  movie$ = this.store.pipe(select(fromMovies.getSelectedMovie));

  constructor(private store: Store<fromMovies.State>) {}
}
