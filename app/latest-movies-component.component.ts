import { Component, Input, ElementRef } from '@angular/core';
import { Latestmovies } from './latest-movies';

@Component({
  selector: 'my-latest-movies',
  templateUrl: '../partials/latest-movies.html',
  styleUrls: ['../css/latest-movies-style.css'],
  inputs: ['latestmovies']
})

export class LatestMoviesComponent {
}
