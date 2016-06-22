import { Component, OnInit } from '@angular/core';
import { MapToIterable } from './mapToIterable.pipe';
import { WikipediaService } from './wikisearch.service';
import {AutocompleteComponent} from './autocomplete.component'

@Component({
  selector: 'my-header',
  templateUrl: '../partials/header.html',
  styleUrls: ['../css/header-style.css'],
  providers: [WikipediaService],
  pipes: [MapToIterable],
  directives: [AutocompleteComponent]
})

export class HeaderComponent implements OnInit {
  gigsearchs: any;

  constructor(private wikipediaService: WikipediaService){}

  getGigsearch(){
    this.wikipediaService.getGigsearch().subscribe(
      gigsearchs => {
        //console.log('Custom API Response: ' + JSON.stringify(gigsearchs));
        this.gigsearchs = JSON.stringify(gigsearchs);
      });
  }
  ngOnInit(){
    this.getGigsearch();
  }
}