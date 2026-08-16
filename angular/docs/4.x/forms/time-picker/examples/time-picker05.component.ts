import { Component } from '@angular/core';

@Component({
  selector: 'docs-time-picker05',
  templateUrl: './time-picker05.component.html'
})
export class TimePicker05Component {

  filterHours = (hour: number): boolean => (hour > 8 && hour <= 23);
  filterMinutes = (min: number): boolean => ((min %= 10) === 0);
  filterSeconds = (sec: number): boolean => ((sec %= 15) === 0);

  time? = new Date();

  handleTimeChange(time: Date | undefined) {
    if (time) {
      this.time = new Date(time?.getTime());
    } else {
      this.time = time;
    }
  }
}
