import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  ButtonDirective,
  ColComponent,
  DateRangePickerComponent,
  DropdownCloseDirective,
  RowComponent,
  TemplateIdDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker02',
  templateUrl: './date-range-picker02.component.html',
  imports: [
    RowComponent,
    ColComponent,
    DateRangePickerComponent,
    TemplateIdDirective,
    ButtonDirective,
    DropdownCloseDirective,
    DatePipe
  ]
})
export class DateRangePicker02Component {
  public date = new Date();
  readonly startDate = signal<Date | null>(new Date(new Date().setDate(this.date.getDate() + 1)));
  readonly endDate = signal<Date | null>(new Date(new Date().setDate(this.date.getDate() + 3)));
  readonly calendarDate = signal(new Date(Date.now()));

  onToday() {
    this.calendarDate.set(new Date(Date.now()));
  }

  onClear() {
    this.startDate.set(null);
    this.endDate.set(null);
  }
}
