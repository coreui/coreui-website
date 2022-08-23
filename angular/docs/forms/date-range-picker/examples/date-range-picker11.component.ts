import { Component } from '@angular/core';

@Component({
  selector: 'docs-date-range-picker11',
  templateUrl: './date-range-picker11.component.html'
})
export class DateRangePicker11Component {
  dayFormat = (date: Date) => date.getDate();
}
