import { DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-time-picker14',
  templateUrl: './time-picker14.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, ReactiveFormsModule, FormsModule, TimePickerComponent, JsonPipe, DatePipe]
})
export class TimePicker14Component implements OnInit {
  time = new Date();

  ngOnInit(): void {
    this.time.setMilliseconds(0);
    this.time.setSeconds(0);
    this.time.setMinutes(15);
    this.time.setHours(13);
  }
}
