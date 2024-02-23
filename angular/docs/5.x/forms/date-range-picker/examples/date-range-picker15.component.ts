import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker15',
  templateUrl: './date-range-picker15.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, ReactiveFormsModule, FormsModule, DateRangePickerComponent, JsonPipe]
})
export class DateRangePicker15Component implements OnInit {

  startDate!: Date;
  endDate!: Date;

  ngOnInit(): void {
    const date = new Date();
    this.startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 6);
    this.endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}
