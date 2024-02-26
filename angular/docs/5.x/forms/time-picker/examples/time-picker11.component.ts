import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker11',
  templateUrl: './time-picker11.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TimePickerComponent
  ]
})
export class TimePicker11Component {}
