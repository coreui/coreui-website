import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker14',
  templateUrl: './date-range-picker14.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, ReactiveFormsModule, DateRangePickerComponent, JsonPipe]
})
export class DateRangePicker14Component implements OnInit {

  startDate = new Date();
  endDate = new Date();

  formGroup!: FormGroup;

  get toLocaleDateString() {
    return this.formGroup.value.dateRangePicker.startDate?.toLocaleDateString() + ' -> ' + this.formGroup.value.dateRangePicker.endDate?.toLocaleDateString();
  }

  ngOnInit(): void {
    const startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate());
    const endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() + 6);

    const dateRange = { startDate, endDate };

    this.formGroup = new FormGroup({
      dateRangePicker: new FormControl(dateRange, { nonNullable: false })
    });
  }
}
