import { Component } from '@angular/core';

@Component({
  selector: 'docs-date-range-picker01',
  templateUrl: './date-range-picker01.component.html'
})
export class DateRangePicker01Component {

  date = new Date();
  startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 11);
  endDate = new Date(this.date.getFullYear(), this.date.getMonth(), 17);

}
