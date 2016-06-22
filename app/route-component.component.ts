import { Component } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';

@Component({
  selector: 'my-routing',
  templateUrl:`
  <a [routerLink]="['home-page']">Home</a>
  <a [routerLink]="['about-page']">About</a>
  <div class="outer-outlet">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [HomeComponent, AboutComponent, ROUTER_DIRECTIVES]
})

@Routes([
    // these are our two routes
    { path: './HomeC', component: HomeComponent },
    { path: 'about-page', component: AboutComponent }
])

export class RoutingComponent{

}
