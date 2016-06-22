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
var activity_services_1 = require('./activity.services');
var mapToIterable_pipe_1 = require('./mapToIterable.pipe');
var ActivityComponent = (function () {
    function ActivityComponent(activityServices) {
        this.activityServices = activityServices;
    }
    ActivityComponent.prototype.getActivities = function () {
        var _this = this;
        this.activityServices.getActivities().subscribe(function (activities) {
            //console.log('API Response: ' + JSON.stringify(activities));
            _this.activities = activities;
        });
    };
    ActivityComponent.prototype.ngOnInit = function () {
        this.getActivities();
    };
    ActivityComponent = __decorate([
        core_1.Component({
            selector: 'my-activity',
            templateUrl: '../partials/activity.html',
            providers: [activity_services_1.ActivityServices],
            pipes: [mapToIterable_pipe_1.MapToIterable]
        }), 
        __metadata('design:paramtypes', [activity_services_1.ActivityServices])
    ], ActivityComponent);
    return ActivityComponent;
}());
exports.ActivityComponent = ActivityComponent;
//# sourceMappingURL=activity-component.component.js.map