import { Component, OnInit} from '@angular/core';
import { Slider } from './slider';
import { FirstSliderServices } from './first-slider.services';
import { MapToIterable } from './mapToIterable.pipe';

@Component({
  selector: 'my-first-slider',
  templateUrl: '../partials/first-slider.html',
  styleUrls: ['../css/slider-style.css'],
  providers: [FirstSliderServices],
  pipes: [MapToIterable]
})

export class FirstSliderComponent implements OnInit {
movies: any;
events: any;
clubs: any;

constructor(private firstsliderServices: FirstSliderServices){}

  getMovies(){
    this.firstsliderServices.getMovies().subscribe(
      movies => {
      //console.log('API Response: ' + JSON.stringify(movies));
      this.movies = movies;
    });
  }
  getEvents(){
    this.firstsliderServices.getEvents().subscribe(
      events => {
      //console.log('API Response: ' + JSON.stringify(events));
      this.events = events;
    });
  }
  getClubs(){
    this.firstsliderServices.getClubs().subscribe(
      clubs => {
      //console.log('API Response: ' + JSON.stringify(clubs));
      this.clubs = clubs;
    });
  }
  ngOnInit(){
    this.getMovies();
    this.getEvents();
    this.getClubs();
  }
}
