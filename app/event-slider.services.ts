import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable( )
export class EventSliderServices{
  constructor (private http: Http) {}

  getTodayEvents(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event&filter=today')
    .map(response => response.json());
  }
  getWeeklyEvents(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event&filter=week')
    .map(response => response.json());
  }
  getMonthlyEvents(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event&filter=month')
    .map(response => response.json());
  }
  getFutureEvents(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event&filter=future')
    .map(response => response.json());
  }
}
