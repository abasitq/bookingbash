import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Activities } from './activity';
import 'rxjs/add/operator/map';


@Injectable( )
export class ActivityServices{
  constructor (private http: Http) {}


  getActivities(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/activities')
    .map(response => response.json());
  }
}
