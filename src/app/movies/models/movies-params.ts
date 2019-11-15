import { SortDirection } from '@angular/material';

export interface MoviesParams {
  limit: number;
  page: number;
  sortBy: string;
  sortDir: SortDirection;
}
