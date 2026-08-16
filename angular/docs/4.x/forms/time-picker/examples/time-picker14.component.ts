import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'docs-time-picker14',
  templateUrl: './time-picker14.component.html'
})
export class TimePicker14Component implements OnInit {
  time = new Date();

  ngOnInit(): void {
    this.time.setMilliseconds(0);
    this.time.setSeconds(0);
    this.time.setMinutes(15);
    this.time.setHours(13);
  }
}
