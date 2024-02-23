import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker12',
  templateUrl: './time-picker12.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, TimePickerComponent]
})
export class TimePicker12Component {}
