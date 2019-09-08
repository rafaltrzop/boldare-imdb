import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Movie } from '@app/movies/models';
import { MoviesService } from '@app/movies/services';

@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.scss']
})
export class MoviesCollectionComponent implements AfterViewInit {
  // @Input()
  // movies: Movie[];

  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: false })
  sort: MatSort;

  movies: Movie[];
  displayedColumns: string[] = ['position', 'title', 'year', 'metascore'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize = 10;
  isLoadingResults = true;
  resultsLength = 0;

  constructor(private moviesService: MoviesService) {}

  // TODO: set query params in URL
  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.moviesService.getMovies({
            limit: this.paginator.pageSize,
            page: this.paginator.pageIndex + 1,
            sortBy: this.sort.active,
            sortDir: this.sort.direction
          });
        }),
        map(data => {
          this.isLoadingResults = false;
          this.resultsLength = data.total;
          return data.collection;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          return of([]);
        })
      )
      .subscribe(data => (this.movies = data));
  }
}
