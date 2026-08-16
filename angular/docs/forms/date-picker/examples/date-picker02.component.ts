import { Component, signal } from '@angular/core';
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
  imports: [
    RowComponent,
    ColComponent,
    DatePickerComponent,
    TemplateIdDirective,
    ButtonDirective,
    DropdownCloseDirective,
    DatePipe
  ]
})
export class DatePicker02Component {
  readonly date = signal<Date | null>(new Date());
  readonly calendarDate = signal(new Date(Date.now()));

  protected onToday() {
    this.calendarDate.set(new Date(Date.now()));
    this.date.set(this.calendarDate());
  }

  protected onCancel() {
    this.date.set(null);
  }
}
