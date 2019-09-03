import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';

import { FooComponent } from '@app/movies/components';

@NgModule({
  declarations: [FooComponent],
  imports: [
    // CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule {}
