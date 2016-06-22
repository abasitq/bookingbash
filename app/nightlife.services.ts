import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Nightlifes } from './nightlife';
import 'rxjs/add/operator/map';

@Injectable( )
export class NightlifeServices{

  constructor (private http: Http) {}


  getNightlifes(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=club')
    .map(response => response.json());

  }
}
