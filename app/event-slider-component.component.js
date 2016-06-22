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
var mapToIterable_pipe_1 = require('./mapToIterable.pipe');
var event_slider_services_1 = require('./event-slider.services');
var EventSliderComponent = (function () {
    function EventSliderComponent(eventsliderServices) {
        this.eventsliderServices = eventsliderServices;
        this.resizer = 'http://i--demo.com/projects/bbash/image-resizer/?u=';
    }
    EventSliderComponent.prototype.getTodayEvents = function () {
        var _this = this;
        this.eventsliderServices.getTodayEvents().subscribe(function (todayevents) {
            //console.log('API Response: ' + JSON.stringify(latestmovies));
            _this.todayevents = todayevents;
        });
    };
    EventSliderComponent.prototype.getWeeklyEvents = function () {
        var _this = this;
        this.eventsliderServices.getWeeklyEvents().subscribe(function (weeklyevents) {
            //console.log('API Response: ' + JSON.stringify(latestmovies));
            _this.weeklyevents = weeklyevents;
        });
    };
    EventSliderComponent.prototype.getMonthlyEvents = function () {
        var _this = this;
        this.eventsliderServices.getMonthlyEvents().subscribe(function (monthlyevents) {
            //console.log('API Response: ' + JSON.stringify(latestmovies));
            _this.monthlyevents = monthlyevents;
        });
    };
    EventSliderComponent.prototype.getFutureEvents = function () {
        var _this = this;
        this.eventsliderServices.getFutureEvents().subscribe(function (futureevents) {
            //console.log('API Response: ' + JSON.stringify(latestmovies));
            _this.futureevents = futureevents;
        });
    };
    EventSliderComponent.prototype.ngOnInit = function () {
        this.getTodayEvents();
        this.getWeeklyEvents();
        this.getMonthlyEvents();
        this.getFutureEvents();
    };
    EventSliderComponent = __decorate([
        core_1.Component({
            selector: 'my-event-slider',
            templateUrl: '../partials/event-slider.html',
            pipes: [mapToIterable_pipe_1.MapToIterable],
            providers: [event_slider_services_1.EventSliderServices]
        }), 
        __metadata('design:paramtypes', [event_slider_services_1.EventSliderServices])
    ], EventSliderComponent);
    return EventSliderComponent;
}());
exports.EventSliderComponent = EventSliderComponent;
//# sourceMappingURL=event-slider-component.component.js.map