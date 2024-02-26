import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker09',
  templateUrl: './time-picker09.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, TimePickerComponent]
})
export class TimePicker09Component {}
