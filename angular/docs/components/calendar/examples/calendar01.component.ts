import { Component } from '@angular/core';
import { CalendarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-calendar01',
  imports: [CalendarComponent],
  templateUrl: './calendar01.component.html'
})
export class Calendar01Component {
  startDate = new Date();
}
