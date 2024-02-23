import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  ButtonDirective,
  ColComponent,
  DatePickerComponent,
  DropdownCloseDirective,
  RowComponent,
  TemplateIdDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-date-picker02',
  templateUrl: './date-picker02.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, DatePickerComponent, TemplateIdDirective, ButtonDirective, DropdownCloseDirective, DatePipe]
})
export class DatePicker02Component {

  public date?: Date | null = new Date();
  public calendarDate = Date.now();

  onToday() {
    this.calendarDate = Date.now();
  }

  onCancel() {
    this.date = null;
  }
}
