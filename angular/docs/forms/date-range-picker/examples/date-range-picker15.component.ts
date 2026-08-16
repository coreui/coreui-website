import { DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker15',
  templateUrl: './date-range-picker15.component.html',
  imports: [RowComponent, ColComponent, ReactiveFormsModule, FormsModule, DateRangePickerComponent, JsonPipe, DatePipe]
})
export class DateRangePicker15Component implements OnInit {
  readonly value = signal<{ startDate: Date; endDate: Date } | null>(null);

  ngOnInit(): void {
    const date = new Date();
    const startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 6);
    const endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    this.value.set({ startDate, endDate });
  }
}
