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
var nightlife_services_1 = require('./nightlife.services');
var mapToIterable_pipe_1 = require('./mapToIterable.pipe');
var NightlifeComponent = (function () {
    function NightlifeComponent(nightlifeServices) {
        this.nightlifeServices = nightlifeServices;
    }
    NightlifeComponent.prototype.getNightlifes = function () {
        var _this = this;
        this.nightlifeServices.getNightlifes().subscribe(function (nightlifes) {
            //console.log('API Response: ' + JSON.stringify(nightlifes));
            _this.nightlifes = nightlifes;
        });
    };
    NightlifeComponent.prototype.ngOnInit = function () {
        this.getNightlifes();
    };
    NightlifeComponent = __decorate([
        core_1.Component({
            selector: 'my-nightlife',
            templateUrl: '../partials/nightlife.html',
            providers: [nightlife_services_1.NightlifeServices],
            pipes: [mapToIterable_pipe_1.MapToIterable]
        }), 
        __metadata('design:paramtypes', [nightlife_services_1.NightlifeServices])
    ], NightlifeComponent);
    return NightlifeComponent;
}());
exports.NightlifeComponent = NightlifeComponent;
//# sourceMappingURL=nightlife-component.component.js.map