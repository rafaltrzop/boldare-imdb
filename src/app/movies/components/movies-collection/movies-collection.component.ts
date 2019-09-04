import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movies-collection',
  templateUrl: './movies-collection.component.html',
  styleUrls: ['./movies-collection.component.scss']
})
export class MoviesCollectionComponent {
  @Input()
  movies: any[]; // TODO: Movie[] type

  displayedColumns: string[] = ['no', 'title', 'year', 'metascore'];
}
