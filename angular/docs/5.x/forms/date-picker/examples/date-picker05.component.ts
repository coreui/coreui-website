import { Component } from '@angular/core';
import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-picker05',
  templateUrl: './date-picker05.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DatePickerComponent]
})
export class DatePicker05Component {}
