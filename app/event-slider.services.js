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
require('rxjs/add/operator/map');
var EventSliderServices = (function () {
    function EventSliderServices(http) {
        this.http = http;
    }
    EventSliderServices.prototype.getTodayEvents = function () {
        return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event&filter=today')
            .map(function (response) { return response.json(); });
    };
    EventSliderServices.prototype.getWeeklyEvents = function () {
        return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event&filter=week')
            .map(function (response) { return response.json(); });
    };
    EventSliderServices.prototype.getMonthlyEvents = function () {
        return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event&filter=month')
            .map(function (response) { return response.json(); });
    };
    EventSliderServices.prototype.getFutureEvents = function () {
        return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event&filter=future')
            .map(function (response) { return response.json(); });
    };
    EventSliderServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventSliderServices);
    return EventSliderServices;
}());
exports.EventSliderServices = EventSliderServices;
//# sourceMappingURL=event-slider.services.js.map