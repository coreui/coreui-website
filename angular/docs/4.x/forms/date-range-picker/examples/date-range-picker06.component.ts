import { Component } from '@angular/core';

@Component({
  selector: 'docs-date-range-picker06',
  templateUrl: './date-range-picker06.component.html'
})
export class DateRangePicker06Component {

  public calendarDate = new Date(2022, 2, 1);
  public disabledDates = [
    [new Date(2022, 2, 4), new Date(2022, 2, 7)], // range of dates that cannot be selected
    new Date(2022, 2, 16), // single date that cannot be selected
    new Date(2022, 3, 16),
    [new Date(2022, 4, 2), new Date(2022, 4, 8)]
  ];
  public maxDate = new Date(2022, 5, 0);
  public minDate = new Date(2022, 0, 1);

  dateFilter = (date: Date | null): boolean => {
    const day = date?.getDay();
    return day !== 0;
  };
}
