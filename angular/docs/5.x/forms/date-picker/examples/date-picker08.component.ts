import { Component } from '@angular/core';
import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-picker08',
  templateUrl: './date-picker08.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DatePickerComponent]
})
export class DatePicker08Component {}
