import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
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
  standalone: true,
  imports: [RowComponent, ColComponent, DateRangePickerComponent, TemplateIdDirective, ButtonDirective, DropdownCloseDirective, DatePipe]
})
export class DateRangePicker02Component {

  public date = new Date();
  public startDate?: Date | null = new Date(new Date().setDate(this.date.getDate() + 1));
  public endDate?: Date | null = new Date(new Date().setDate(this.date.getDate() + 3));
  public calendarDate = Date.now();

  onToday() {
    this.calendarDate = Date.now();
  }

  onClear() {
    this.startDate = null;
    this.endDate = null;
  }
}
