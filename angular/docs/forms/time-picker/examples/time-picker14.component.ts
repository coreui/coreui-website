import { DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker14',
  templateUrl: './time-picker14.component.html',
  imports: [RowComponent, ColComponent, ReactiveFormsModule, FormsModule, TimePickerComponent, JsonPipe, DatePipe]
})
export class TimePicker14Component implements OnInit {
  readonly time = signal(new Date());

  ngOnInit(): void {
    const time = this.time();
    time.setMilliseconds(0);
    time.setSeconds(0);
    time.setMinutes(15);
    time.setHours(13);
    this.time.set(time);
  }
}
