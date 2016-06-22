import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, Request, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaService {
  constructor (private http: Http) {}


  getGigsearch(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/get_posts/')
    .map(response => response.json());
  }
}
