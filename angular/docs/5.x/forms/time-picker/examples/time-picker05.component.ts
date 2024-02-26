import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker05',
  templateUrl: './time-picker05.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, TimePickerComponent, DatePipe]
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
