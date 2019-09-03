import { NgModule } from '@angular/core';

import { MoviesRoutingModule } from './movies-routing.module';

import { MoviesCollectionPageComponent } from '@app/movies/containers';
import { MoviesCollectionComponent } from '@app/movies/components';

@NgModule({
  declarations: [MoviesCollectionPageComponent, MoviesCollectionComponent],
  imports: [MoviesRoutingModule]
})
export class MoviesModule {}
