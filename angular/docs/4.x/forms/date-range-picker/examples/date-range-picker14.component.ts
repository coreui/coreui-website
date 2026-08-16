import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'docs-date-range-picker14',
  templateUrl: './date-range-picker14.component.html'
})
export class DateRangePicker14Component {

  startDate = new Date();
  endDate = new Date();


  formGroup!: FormGroup;

  get toLocaleDateString() {
    return this.formGroup.value.dateRangePicker.startDate?.toLocaleDateString() + ' -> ' + this.formGroup.value.dateRangePicker.endDate?.toLocaleDateString();
  }

  ngOnInit(): void {
    const startDate = new Date(this.startDate.getFullYear(), this.startDate.getMonth(), this.startDate.getDate());
    const endDate = new Date(this.endDate.getFullYear(), this.endDate.getMonth(), this.endDate.getDate() + 6);

    const dateRange = {startDate, endDate};

    this.formGroup = new FormGroup({
      dateRangePicker: new FormControl(dateRange, { nonNullable: false })
    });
  }
}
