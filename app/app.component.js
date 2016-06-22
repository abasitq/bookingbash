"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var header_component_component_1 = require('./header-component.component');
var menu_component_component_1 = require('./menu-component.component');
var first_slider_component_component_1 = require('./first-slider-component.component');
var second_slider_component_component_1 = require('./second-slider-component.component');
var event_slider_component_component_1 = require('./event-slider-component.component');
var activity_component_component_1 = require('./activity-component.component');
var nightlife_component_component_1 = require('./nightlife-component.component');
var video_component_component_1 = require('./video-component.component');
var subscribe_component_component_1 = require('./subscribe-component.component');
var other_services_component_component_1 = require('./other-services-component.component');
var footer_component_component_1 = require('./footer-component.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: '../partials/home-page.html',
            directives: [header_component_component_1.HeaderComponent, menu_component_component_1.MenuComponent, first_slider_component_component_1.FirstSliderComponent, second_slider_component_component_1.SecondSliderComponent, event_slider_component_component_1.EventSliderComponent, activity_component_component_1.ActivityComponent, nightlife_component_component_1.NightlifeComponent, video_component_component_1.VideoComponent, subscribe_component_component_1.SubscribeComponent, other_services_component_component_1.OtherservicesComponent, footer_component_component_1.FooterComponent],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map