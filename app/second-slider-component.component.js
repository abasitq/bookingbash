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
var second_slider_services_1 = require('./second-slider.services');
var mapToIterable_pipe_1 = require('./mapToIterable.pipe');
var SecondSliderComponent = (function () {
    function SecondSliderComponent(secondsliderServices) {
        this.secondsliderServices = secondsliderServices;
        this.resizer = 'http://i--demo.com/projects/bbash/image-resizer/?u=';
    }
    SecondSliderComponent.prototype.getLatestMovies = function () {
        var _this = this;
        this.secondsliderServices.getLatestMovies().subscribe(function (latestmovies) {
            //console.log('API Response: ' + JSON.stringify(latestmovies));
            _this.latestmovies = latestmovies;
        });
    };
    SecondSliderComponent.prototype.getCommingMovies = function () {
        var _this = this;
        this.secondsliderServices.getCommingMovies().subscribe(function (commingmovies) {
            //console.log('API Response: ' + JSON.stringify(latestmovies));
            _this.commingmovies = commingmovies;
        });
    };
    SecondSliderComponent.prototype.getTopMovies = function () {
        var _this = this;
        this.secondsliderServices.getTopMovies().subscribe(function (topmovies) {
            //console.log('API Response: ' + JSON.stringify(latestmovies));
            _this.topmovies = topmovies;
        });
    };
    SecondSliderComponent.prototype.ngOnInit = function () {
        this.getLatestMovies();
        this.getCommingMovies();
        this.getTopMovies();
    };
    SecondSliderComponent = __decorate([
        core_1.Component({
            selector: 'my-second-slider',
            templateUrl: '../partials/second-slider.html',
            providers: [second_slider_services_1.SecondSliderServices],
            pipes: [mapToIterable_pipe_1.MapToIterable]
        }), 
        __metadata('design:paramtypes', [second_slider_services_1.SecondSliderServices])
    ], SecondSliderComponent);
    return SecondSliderComponent;
}());
exports.SecondSliderComponent = SecondSliderComponent;
//# sourceMappingURL=second-slider-component.component.js.map