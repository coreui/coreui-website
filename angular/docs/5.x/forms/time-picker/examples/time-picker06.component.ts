import { Component } from '@angular/core';
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
  standalone: true,
  imports: [RowComponent, ColComponent, TimePickerComponent, TemplateIdDirective, ButtonDirective, DropdownCloseDirective]
})
export class TimePicker06Component {

  time? = new Date();

}
