import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private moviesService: MoviesService, private router: Router) {}

  ngAfterViewInit(): void {
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;

          const limit = this.paginator.pageSize;
          const page = this.paginator.pageIndex + 1;
          const sortBy = this.sort.active;
          const sortDir = this.sort.direction;

          const queryParams: { limit: number; page: number; sort?: string } = {
            limit,
            page
          };
          if (sortBy && sortDir) {
            queryParams.sort = `${this.sort.active}:${this.sort.direction}`;
          }
          this.router.navigate([], { queryParams });

          return this.moviesService.getMovies({
            limit,
            page,
            sortBy,
            sortDir
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
