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
var core_2 = require('@angular/core');
var video_services_1 = require('./video.services');
var VideoComponent = (function () {
    function VideoComponent(elRef, videoServices) {
        this.videoServices = videoServices;
    }
    VideoComponent.prototype.getVideo = function () {
        var _this = this;
        this.videoServices.getVideo().subscribe(function (videos) {
            //console.log('VIDEOURL' + JSON.stringify(videos));
            _this.videos = JSON.stringify(videos);
            _this.videoUrl = videos.video_url;
            //console.log('VIDEOURL' + this.videoUrl);
        });
    };
    VideoComponent.prototype.ngOnInit = function () {
        this.getVideo();
    };
    VideoComponent = __decorate([
        core_1.Component({
            selector: 'my-video',
            templateUrl: '../partials/video.html',
            providers: [video_services_1.VideoServices]
        }), 
        __metadata('design:paramtypes', [core_2.ElementRef, video_services_1.VideoServices])
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video-component.component.js.map