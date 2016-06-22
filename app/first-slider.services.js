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
var FirstSliderServices = (function () {
    function FirstSliderServices(http) {
        this.http = http;
    }
    FirstSliderServices.prototype.getMovies = function () {
        return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=movie')
            .map(function (response) { return response.json(); });
    };
    FirstSliderServices.prototype.getEvents = function () {
        return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=event')
            .map(function (response) { return response.json(); });
    };
    FirstSliderServices.prototype.getClubs = function () {
        return this.http.get('http://i--demo.com/projects/bbash/api/bash/featured_content/?type=club')
            .map(function (response) { return response.json(); });
    };
    FirstSliderServices = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FirstSliderServices);
    return FirstSliderServices;
}());
exports.FirstSliderServices = FirstSliderServices;
//# sourceMappingURL=first-slider.services.js.map