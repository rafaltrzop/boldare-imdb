import { NgModule } from '@angular/core';

import { MaterialModule } from '@app/material';
import { MoviesRoutingModule } from './movies-routing.module';

import {
  MovieDetailsPageComponent,
  MoviesCollectionPageComponent
} from '@app/movies/containers';
import { MoviesCollectionComponent } from '@app/movies/components';

@NgModule({
  declarations: [
    MovieDetailsPageComponent,
    MoviesCollectionPageComponent,
    MoviesCollectionComponent
  ],
  imports: [MaterialModule, MoviesRoutingModule]
})
export class MoviesModule {}
