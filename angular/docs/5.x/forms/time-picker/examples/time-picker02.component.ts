import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker02',
  templateUrl: './time-picker02.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TimePickerComponent
  ]
})
export class TimePicker02Component {}
