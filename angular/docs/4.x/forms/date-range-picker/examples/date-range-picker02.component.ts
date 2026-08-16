import { Component } from '@angular/core';

@Component({
  selector: 'docs-date-range-picker02',
  templateUrl: './date-range-picker02.component.html'
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
