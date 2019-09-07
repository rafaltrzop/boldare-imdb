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

  // TODO
  resultsLength = 100; // TODO: set to 0
  // isLoadingResults = true;
  isLoadingResults = false;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  displayedColumns: string[] = ['no', 'title', 'year', 'metascore'];
}
