import { Component, signal } from '@angular/core';
import { ButtonDirective, CalendarComponent } from '@coreui/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'docs-calendar06',
  imports: [CalendarComponent, DatePipe, ButtonDirective],
  templateUrl: './calendar06.component.html'
})
export class Calendar06Component {
  readonly startDate = signal<Date | null>(new Date());
  readonly endDate = signal<Date | null>(
    new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7)
  );

  handleClear() {
    this.endDate.set(null);
    this.startDate.set(null);
  }
}
