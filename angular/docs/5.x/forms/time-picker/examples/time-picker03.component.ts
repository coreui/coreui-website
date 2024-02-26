import { Component } from '@angular/core';
import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker03',
  templateUrl: './time-picker03.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    TimePickerComponent
  ]
})
export class TimePicker03Component {

  time? = new Date();

}
