import { Component, OnInit } from '@angular/core';
import { SecondSliderServices } from './second-slider.services';
import { MapToIterable } from './mapToIterable.pipe';

declare var jQuery:any;

@Component({
  selector: 'my-second-slider',
  templateUrl: '../partials/second-slider.html',
  providers: [SecondSliderServices],
  pipes: [MapToIterable]
})

export class SecondSliderComponent implements OnInit{

  latestmovies : string;
  commingmovies: string;
  topmovies: string;
  resizer = 'http://i--demo.com/projects/bbash/image-resizer/?u=';
  constructor(private secondsliderServices: SecondSliderServices){}

  getLatestMovies(){
    this.secondsliderServices.getLatestMovies().subscribe(
      latestmovies => {
      //console.log('API Response: ' + JSON.stringify(latestmovies));
      this.latestmovies = latestmovies;
    });
  }
  getCommingMovies(){
    this.secondsliderServices.getCommingMovies().subscribe(
      commingmovies => {
      //console.log('API Response: ' + JSON.stringify(latestmovies));
      this.commingmovies = commingmovies;
    });
  }
  getTopMovies(){
    this.secondsliderServices.getTopMovies().subscribe(
      topmovies => {
      //console.log('API Response: ' + JSON.stringify(latestmovies));
      this.topmovies = topmovies;
    });
  }
  ngOnInit(){
    this.getLatestMovies();
    this.getCommingMovies();
    this.getTopMovies();
  }
}
