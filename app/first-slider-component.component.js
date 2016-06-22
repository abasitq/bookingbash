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
var first_slider_services_1 = require('./first-slider.services');
var mapToIterable_pipe_1 = require('./mapToIterable.pipe');
var FirstSliderComponent = (function () {
    function FirstSliderComponent(firstsliderServices) {
        this.firstsliderServices = firstsliderServices;
    }
    FirstSliderComponent.prototype.getMovies = function () {
        var _this = this;
        this.firstsliderServices.getMovies().subscribe(function (movies) {
            //console.log('API Response: ' + JSON.stringify(movies));
            _this.movies = movies;
        });
    };
    FirstSliderComponent.prototype.getEvents = function () {
        var _this = this;
        this.firstsliderServices.getEvents().subscribe(function (events) {
            //console.log('API Response: ' + JSON.stringify(events));
            _this.events = events;
        });
    };
    FirstSliderComponent.prototype.getClubs = function () {
        var _this = this;
        this.firstsliderServices.getClubs().subscribe(function (clubs) {
            //console.log('API Response: ' + JSON.stringify(clubs));
            _this.clubs = clubs;
        });
    };
    FirstSliderComponent.prototype.ngOnInit = function () {
        this.getMovies();
        this.getEvents();
        this.getClubs();
    };
    FirstSliderComponent = __decorate([
        core_1.Component({
            selector: 'my-first-slider',
            templateUrl: '../partials/first-slider.html',
            styleUrls: ['../css/slider-style.css'],
            providers: [first_slider_services_1.FirstSliderServices],
            pipes: [mapToIterable_pipe_1.MapToIterable]
        }), 
        __metadata('design:paramtypes', [first_slider_services_1.FirstSliderServices])
    ], FirstSliderComponent);
    return FirstSliderComponent;
}());
exports.FirstSliderComponent = FirstSliderComponent;
//# sourceMappingURL=first-slider-component.component.js.map