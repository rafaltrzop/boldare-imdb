import { Component, Input } from '@angular/core';

import { Actor, Movie } from '@app/movies/models';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @Input()
  movie: Movie;

  @Input()
  actors: Actor[];
}
