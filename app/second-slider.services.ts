import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Slider } from './slider';
import 'rxjs/add/operator/map';

@Injectable( )
export class SecondSliderServices{
  constructor (private http: Http) {}

  getLatestMovies(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/movies/?filter=latest')
    .map(response => response.json());
  }
  getCommingMovies(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/movies/?filter=coming-soon')
    .map(response => response.json());
  }
  getTopMovies(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/movies/?filter=top-rated')
    .map(response => response.json());
  }
}
