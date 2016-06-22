import { Component, OnInit } from '@angular/core';
import { Nightlifes } from './nightlife';
import { NightlifeServices } from './nightlife.services';
import { MapToIterable } from './mapToIterable.pipe';

@Component({
  selector: 'my-nightlife',
  templateUrl: '../partials/nightlife.html',
  providers: [NightlifeServices ],
  pipes: [MapToIterable]
})

export class NightlifeComponent implements OnInit {
  nightlifes:  string;

  constructor(private nightlifeServices: NightlifeServices){}

  getNightlifes(){
    this.nightlifeServices.getNightlifes().subscribe(
      nightlifes => {
        //console.log('API Response: ' + JSON.stringify(nightlifes));
        this.nightlifes = nightlifes;
      });
  }
  ngOnInit(){
    this.getNightlifes();
  }
}
