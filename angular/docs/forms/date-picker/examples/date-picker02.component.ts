import { Component } from '@angular/core';

@Component({
  selector: 'docs-date-picker02',
  templateUrl: './date-picker02.component.html'
})
export class DatePicker02Component {

  public date = new Date();
  public calendarDate = Date.now();

  onToday() {
    this.calendarDate = Date.now();
  }

}
