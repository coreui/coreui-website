import { Component } from '@angular/core';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker05',
  templateUrl: './date-range-picker05.component.html',
  imports: [RowComponent, ColComponent, DateRangePickerComponent]
})
export class DateRangePicker05Component {}
