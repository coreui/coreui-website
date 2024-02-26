import { Component } from '@angular/core';
import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-picker07',
  templateUrl: './date-picker07.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DatePickerComponent]
})
export class DatePicker07Component {}
