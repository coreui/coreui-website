import { Component } from '@angular/core';
import { CalendarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-calendar07',
  imports: [CalendarComponent],
  templateUrl: './calendar07.component.html'
})
export class Calendar07Component {
  public calendarDate = new Date(2024, 2, 1);
  public disabledDates = [
    [new Date(2024, 2, 4), new Date(2024, 2, 7)], // range of dates that cannot be selected
    new Date(2024, 2, 16), // single date that cannot be selected
    new Date(2024, 3, 16),
    [new Date(2024, 4, 2), new Date(2024, 4, 8)]
  ];
  public maxDate = new Date(2024, 5, 0);
  public minDate = new Date(2024, 0, 1);

  dateFilter = (date: Date | null): boolean => {
    // Sundays cannot be selected
    const day = date?.getDay();
    return day !== 0;
  };
}
