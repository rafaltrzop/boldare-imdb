import { Component, OnInit } from '@angular/core';

import { MoviesService } from '@app/movies/services';

@Component({
  selector: 'app-foo',
  template: '<h1>Movies</h1>'
})
export class FooComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => {
      console.log(movies);
    });
  }
}
