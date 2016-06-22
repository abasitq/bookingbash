import { Component } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { HeaderComponent } from './header-component.component';
import { MenuComponent } from './menu-component.component';
import { FirstSliderComponent } from './first-slider-component.component';
import { SecondSliderComponent } from './second-slider-component.component';
import { EventSliderComponent } from './event-slider-component.component';
import { ActivityComponent } from './activity-component.component';
import { NightlifeComponent } from './nightlife-component.component';
import { VideoComponent } from './video-component.component';
import { SubscribeComponent } from './subscribe-component.component';
import { OtherservicesComponent } from './other-services-component.component';
import { FooterComponent } from './footer-component.component';

@Component({
  selector: 'my-app',
  templateUrl: '../partials/home-page.html',
  directives: [HeaderComponent, MenuComponent, FirstSliderComponent, SecondSliderComponent, EventSliderComponent, ActivityComponent, NightlifeComponent, VideoComponent, SubscribeComponent, OtherservicesComponent, FooterComponent],
  providers: [HTTP_PROVIDERS]
})

export class AppComponent {
}