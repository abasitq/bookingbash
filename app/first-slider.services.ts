import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Slider } from './slider';
import 'rxjs/add/operator/map';

@Injectable( )
export class FirstSliderServices{
  constructor (private http: Http) {}

  getMovies(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=movie')
    .map(response => response.json());
  }
  getEvents(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event')
    .map(response => response.json());
  }
  getClubs(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=club')
    .map(response => response.json());
  }
}
