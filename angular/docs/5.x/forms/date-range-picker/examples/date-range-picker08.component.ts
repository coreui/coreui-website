import { Component } from '@angular/core';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker08',
  templateUrl: './date-range-picker08.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DateRangePickerComponent]
})
export class DateRangePicker08Component {
}
