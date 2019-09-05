import { Component, Input } from '@angular/core';

import { Movie } from '@app/movies/models';

@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.scss']
})
export class MoviesCollectionComponent {
  @Input()
  movies: Movie[];

  displayedColumns: string[] = ['no', 'title', 'year', 'metascore'];
}
