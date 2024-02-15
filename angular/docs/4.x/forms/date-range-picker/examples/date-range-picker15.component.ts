import { Component } from '@angular/core';

@Component({
  selector: 'docs-date-range-picker15',
  templateUrl: './date-range-picker15.component.html'
})
export class DateRangePicker15Component {

  startDate!: Date;
  endDate!: Date;

  ngOnInit(): void {
    const date = new Date();
    this.startDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 6);
    this.endDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }
}
