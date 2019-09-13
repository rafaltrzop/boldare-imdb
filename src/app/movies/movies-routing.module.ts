import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  MovieDetailsPageComponent,
  MoviesCollectionPageComponent
} from '@app/movies/containers';

const routes: Routes = [
  {
    path: '',
    component: MoviesCollectionPageComponent
  },
  {
    path: ':id',
    component: MovieDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule {}
