import { Component } from '@angular/core';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker03',
  templateUrl: './date-range-picker03.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DateRangePickerComponent]
})
export class DateRangePicker03Component {}
