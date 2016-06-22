import { Component, OnInit } from '@angular/core';
import { Activities } from './activity';
import { ActivityServices } from './activity.services';
import { MapToIterable } from './mapToIterable.pipe';

@Component({
  selector: 'my-activity',
  templateUrl: '../partials/activity.html',
  providers: [ActivityServices],
  pipes: [MapToIterable]
})

export class ActivityComponent implements OnInit {
  activities: any;

  constructor(private activityServices: ActivityServices){}

  getActivities(){
    this.activityServices.getActivities().subscribe(
      activities => {
        //console.log('API Response: ' + JSON.stringify(activities));
        this.activities = activities;
      });
  }

  ngOnInit(){
    this.getActivities();
  }
}
