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
var wikisearch_service_1 = require('./wikisearch.service');
var autocomplete_component_1 = require('./autocomplete.component');
var HeaderComponent = (function () {
    function HeaderComponent(wikipediaService) {
        this.wikipediaService = wikipediaService;
    }
    HeaderComponent.prototype.getGigsearch = function () {
        var _this = this;
        this.wikipediaService.getGigsearch().subscribe(function (gigsearchs) {
            //console.log('Custom API Response: ' + JSON.stringify(gigsearchs));
            _this.gigsearchs = JSON.stringify(gigsearchs);
        });
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.getGigsearch();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            templateUrl: '../partials/header.html',
            styleUrls: ['../css/header-style.css'],
            providers: [wikisearch_service_1.WikipediaService],
            pipes: [mapToIterable_pipe_1.MapToIterable],
            directives: [autocomplete_component_1.AutocompleteComponent]
        }), 
        __metadata('design:paramtypes', [wikisearch_service_1.WikipediaService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header-component.component.js.map