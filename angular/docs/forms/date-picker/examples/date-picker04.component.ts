import { Component } from '@angular/core';
import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-picker04',
  templateUrl: './date-picker04.component.html',
  imports: [RowComponent, ColComponent, DatePickerComponent]
})
export class DatePicker04Component {}
