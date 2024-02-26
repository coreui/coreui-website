import { Component } from '@angular/core';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker04',
  templateUrl: './date-range-picker04.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DateRangePickerComponent]
})
export class DateRangePicker04Component {}
