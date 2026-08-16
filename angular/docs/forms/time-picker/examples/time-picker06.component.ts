import { Component, signal } from '@angular/core';
import {
  ButtonDirective,
  ColComponent,
  DropdownCloseDirective,
  RowComponent,
  TemplateIdDirective,
  TimePickerComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-time-picker06',
  templateUrl: './time-picker06.component.html',
  imports: [
    RowComponent,
    ColComponent,
    TimePickerComponent,
    TemplateIdDirective,
    ButtonDirective,
    DropdownCloseDirective
  ]
})
export class TimePicker06Component {
  readonly time = signal(new Date());
}
