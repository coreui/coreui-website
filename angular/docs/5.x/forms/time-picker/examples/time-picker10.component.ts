import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker10',
  templateUrl: './time-picker10.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, TimePickerComponent]
})
export class TimePicker10Component {}
