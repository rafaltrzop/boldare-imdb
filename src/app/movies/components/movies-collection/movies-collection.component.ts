import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatPaginator, MatSort, SortDirection } from '@angular/material';
import { merge, of } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { Movie } from '@app/movies/models';
import { MoviesService } from '@app/movies/services';

@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.scss']
})
export class MoviesCollectionComponent implements AfterViewInit, OnInit {
  // @Input()
  // movies: Movie[];

  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: false })
  sort: MatSort;

  movies: Movie[];
  displayedColumns: string[] = ['position', 'title', 'year', 'metascore'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize: number;
  pageIndex: number;
  sortActive: string;
  sortDirection: SortDirection;
  resultsLength = 0;
  isLoadingResults = true;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    const pageSize = +this.route.snapshot.queryParamMap.get('limit');
    const pageIndex = +this.route.snapshot.queryParamMap.get('page') - 1;
    const sortActive = this.route.snapshot.queryParamMap.get('sortBy');
    let sortDirection = this.route.snapshot.queryParamMap.get('sortDir');
    sortDirection = ['asc', 'desc'].includes(sortDirection)
      ? sortDirection
      : 'asc';

    this.pageSize = pageSize || 10;
    this.pageIndex = pageIndex || 0;
    this.sortActive = sortActive || 'title';
    this.sortDirection = sortDirection as SortDirection;
  }

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

          const queryParams: Params = {
            limit,
            page,
            sortBy: sortBy && sortDir ? sortBy : null,
            sortDir: sortBy && sortDir ? sortDir : null
          };
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
