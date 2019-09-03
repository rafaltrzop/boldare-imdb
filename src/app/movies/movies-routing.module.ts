import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@app/auth/services';
import {
  MovieDetailsPageComponent,
  MoviesCollectionPageComponent
} from '@app/movies/containers';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesCollectionPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'movies/:id',
    canActivate: [AuthGuard],
    component: MovieDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
