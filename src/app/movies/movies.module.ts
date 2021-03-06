import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from '@app/material';
import { MoviesRoutingModule } from './movies-routing.module';

import {
  ActorsCollectionEffects,
  MoviesCollectionEffects
} from '@app/movies/effects';
import * as fromMovies from '@app/movies/reducers';

import {
  MovieDetailsPageComponent,
  MoviesCollectionPageComponent
} from '@app/movies/containers';
import {
  MovieDetailsComponent,
  MoviesCollectionComponent
} from '@app/movies/components';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MoviesRoutingModule,
    StoreModule.forFeature(fromMovies.moviesFeatureKey, fromMovies.reducers),
    EffectsModule.forFeature([ActorsCollectionEffects, MoviesCollectionEffects])
  ],
  declarations: [
    MovieDetailsComponent,
    MovieDetailsPageComponent,
    MoviesCollectionComponent,
    MoviesCollectionPageComponent
  ]
})
export class MoviesModule {}
