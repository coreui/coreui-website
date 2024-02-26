import { Component } from '@angular/core';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker11',
  templateUrl: './date-range-picker11.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DateRangePickerComponent]
})
export class DateRangePicker11Component {
  dayFormat = (date: Date) => date.getDate();
}
