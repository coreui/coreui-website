import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ColComponent, DateRangePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-range-picker14',
  templateUrl: './date-range-picker14.component.html',
  imports: [RowComponent, ColComponent, ReactiveFormsModule, DateRangePickerComponent, JsonPipe]
})
export class DateRangePicker14Component implements OnInit {
  startDate = new Date();
  endDate = new Date();

  formGroup!: FormGroup;

  readonly #toLocaleDateString = signal('');

  get toLocaleDateString() {
    return this.#toLocaleDateString();
  }

  ngOnInit(): void {
    const startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate());
    const endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() + 6);

    const dateRange = { startDate, endDate };

    this.formGroup = new FormGroup({
      dateRangePicker: new FormControl(dateRange, { nonNullable: false })
    });

    this.formGroup.valueChanges.subscribe((value) => {
      this.#toLocaleDateString.set(
        value.dateRangePicker.startDate?.toLocaleDateString() +
          ' -> ' +
          value.dateRangePicker.endDate?.toLocaleDateString()
      );
    });
  }
}
