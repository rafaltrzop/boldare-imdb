import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  MovieDetailsPageComponent,
  MoviesCollectionPageComponent
} from '@app/movies/containers';
import { MovieExistsGuard } from '@app/movies/guards';

const routes: Routes = [
  {
    path: '',
    component: MoviesCollectionPageComponent
  },
  {
    path: ':movieId',
    canActivate: [MovieExistsGuard],
    component: MovieDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
