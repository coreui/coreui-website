import { Component } from '@angular/core';
import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-picker12',
  templateUrl: './date-picker12.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DatePickerComponent]
})
export class DatePicker12Component {}
