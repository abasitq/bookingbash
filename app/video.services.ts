import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable( )
export class VideoServices{
  constructor (private http: Http) {}


  getVideo(): Observable<any> {

    return this.http.get('http://i--demo.com/projects/bbash/api/bash/bbash_video/')
    .map(response => response.json());
  }
}
