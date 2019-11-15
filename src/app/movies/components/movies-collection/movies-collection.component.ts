import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  MatPaginator,
  MatSort,
  MatSortHeader,
  SortDirection
} from '@angular/material';
import { merge } from 'rxjs';

import { Movie, MoviesParams } from '@app/movies/models';

@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.scss']
})
export class MoviesCollectionComponent implements AfterViewInit {
  @ViewChild(MatPaginator, { static: false })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: false })
  sort: MatSort;

  @Input()
  isLoading: boolean;

  @Input()
  movies: Movie[];

  @Input()
  moviesTotal: number;

  @Output()
  queryParamsChange: EventEmitter<MoviesParams> = new EventEmitter<
    MoviesParams
  >();

  displayedColumns: string[] = ['position', 'title', 'year', 'metascore'];
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageSize = 10;
  sortActive: string;
  sortDirection: SortDirection;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private ref: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    // Go back to the first page on sort order change
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });

    // Update URL query string on sort or paginator change
    merge(this.sort.sortChange, this.paginator.page).subscribe(() => {
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
    });

    // Fetch new data on URL query string change
    this.route.queryParamMap.subscribe(queryParamMap => {
      let limit = Math.round(Math.abs(+queryParamMap.get('limit')));
      limit = limit ? limit : this.pageSize;

      let page = Math.round(Math.abs(+queryParamMap.get('page')));
      page = page ? page : 1;

      let sortBy = queryParamMap.get('sortBy');
      sortBy = ['title', 'year', 'metascore'].includes(sortBy) ? sortBy : null;

      let sortDir = queryParamMap.get('sortDir') as SortDirection;
      sortDir = ['asc', 'desc'].includes(sortDir) ? sortDir : null;

      this.paginator.pageSize = limit;
      this.paginator.pageIndex = page - 1;
      this.sortActive = sortBy;
      this.sortDirection = sortDir;

      // Hack for updating Angular Material Sort Header UI
      // https://github.com/angular/components/issues/10242
      // https://github.com/angular/components/issues/12754
      const activeSortHeader = this.sort.sortables.get(sortBy) as MatSortHeader;
      if (activeSortHeader) {
        activeSortHeader._setAnimationTransitionState({
          fromState: sortDir,
          toState: 'active'
        });
      }
      this.ref.detectChanges();

      this.queryParamsChange.emit({
        limit,
        page,
        sortBy,
        sortDir
      });
    });
  }
}
