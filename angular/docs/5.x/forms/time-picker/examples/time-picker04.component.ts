import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker04',
  templateUrl: './time-picker04.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TimePickerComponent
  ]
})
export class TimePicker04Component {}
