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
var router_1 = require('@angular/router');
var home_component_1 = require('./home.component');
var about_component_1 = require('./about.component');
var RoutingComponent = (function () {
    function RoutingComponent() {
    }
    RoutingComponent = __decorate([
        core_1.Component({
            selector: 'my-routing',
            templateUrl: "\n  <a [routerLink]=\"['home-page']\">Home</a>\n  <a [routerLink]=\"['about-page']\">About</a>\n  <div class=\"outer-outlet\">\n    <router-outlet></router-outlet>\n  </div>\n  ",
            directives: [home_component_1.HomeComponent, about_component_1.AboutComponent, router_1.ROUTER_DIRECTIVES]
        }),
        router_1.Routes([
            // these are our two routes
            { path: './HomeC', component: home_component_1.HomeComponent },
            { path: 'about-page', component: about_component_1.AboutComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], RoutingComponent);
    return RoutingComponent;
}());
exports.RoutingComponent = RoutingComponent;
//# sourceMappingURL=route-component.component.js.map