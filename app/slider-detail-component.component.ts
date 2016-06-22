import { Component} from '@angular/core';
import {Slider} from './slider';

@Component({
  selector: 'my-first-detail-slider',
  templateUrl: '../partials/slider-detail.html',
  styleUrls: ['../css/slider-detail-style.css'],
  inputs: ['slider']
})

export class FirstSliderDetailComponent { }
