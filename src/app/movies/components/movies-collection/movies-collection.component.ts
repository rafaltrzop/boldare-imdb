import { Component, OnInit } from '@angular/core';

import { MoviesService } from '@app/movies/services';

@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.scss']
})
export class MoviesCollectionComponent implements OnInit {
  dataSource = [];
  displayedColumns: string[] = ['no', 'title', 'year', 'metascore'];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe(movies => {
      this.dataSource = movies.collection;
      console.log(movies);
    });
  }
}
