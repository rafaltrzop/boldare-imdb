import { Component, OnInit } from '@angular/core';

import { MoviesService } from '@app/movies/services';

@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.scss']
})
export class MoviesCollectionComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => {
      console.log(movies);
    });
  }
}
