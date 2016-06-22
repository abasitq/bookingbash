import { Component, OnInit } from '@angular/core';
import { MapToIterable } from './mapToIterable.pipe';
import { EventSliderServices } from './event-slider.services';



@Component({
  selector: 'my-event-slider',
  templateUrl: '../partials/event-slider.html',
  pipes: [MapToIterable],
  providers: [EventSliderServices]
})

export class EventSliderComponent implements OnInit{
  todayevents: string;
  weeklyevents: string;
  monthlyevents: string;
  futureevents: string;
  resizer = 'http://i--demo.com/projects/bbash/image-resizer/?u=';

  constructor(private eventsliderServices: EventSliderServices){}

  getTodayEvents(){
    this.eventsliderServices.getTodayEvents().subscribe(
      todayevents => {
      //console.log('API Response: ' + JSON.stringify(latestmovies));
      this.todayevents = todayevents;
    });
  }
  getWeeklyEvents(){
    this.eventsliderServices.getWeeklyEvents().subscribe(
      weeklyevents => {
      //console.log('API Response: ' + JSON.stringify(latestmovies));
      this.weeklyevents = weeklyevents;
    });
  }
  getMonthlyEvents(){
    this.eventsliderServices.getMonthlyEvents().subscribe(
      monthlyevents => {
      //console.log('API Response: ' + JSON.stringify(latestmovies));
      this.monthlyevents = monthlyevents;
    });
  }
  getFutureEvents(){
    this.eventsliderServices.getFutureEvents().subscribe(
      futureevents => {
      //console.log('API Response: ' + JSON.stringify(latestmovies));
      this.futureevents = futureevents;
    });
  }
  ngOnInit(){
    this.getTodayEvents();
    this.getWeeklyEvents();
    this.getMonthlyEvents();
    this.getFutureEvents();
  }
}
