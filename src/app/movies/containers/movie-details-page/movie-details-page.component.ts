import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details-page',
  templateUrl: './movie-details-page.component.html',
  styleUrls: ['./movie-details-page.component.scss']
})
export class MovieDetailsPageComponent implements OnInit {
  movieId: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.movieId = this.route.snapshot.paramMap.get('id');
  }
}
