import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker07',
  templateUrl: './time-picker07.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TimePickerComponent
  ]
})
export class TimePicker07Component {}
