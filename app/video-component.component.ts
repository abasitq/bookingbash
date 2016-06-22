import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { VideoServices } from './video.services';

declare var jQuery:any;

@Component({
  selector: 'my-video',
  templateUrl: '../partials/video.html',
  providers: [VideoServices]
})

export class VideoComponent implements OnInit {
videos: string;
videoUrl: string;

  constructor(elRef: ElementRef, private videoServices: VideoServices){}

  getVideo(){
    this.videoServices.getVideo().subscribe(
      videos => {
        //console.log('VIDEOURL' + JSON.stringify(videos));
        this.videos = JSON.stringify(videos);
        this.videoUrl = videos.video_url;
        //console.log('VIDEOURL' + this.videoUrl);
      });
    }
ngOnInit():any{
  this.getVideo();

}
}
