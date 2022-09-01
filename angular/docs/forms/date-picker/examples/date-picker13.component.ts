import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IDatePickerForm {
  datePicker: FormControl<Date | undefined | null>;
}

@Component({
  selector: 'docs-date-picker13',
  templateUrl: './date-picker13.component.html'
})
export class DatePicker13Component implements OnInit {

  date = new Date();

  formGroup!: FormGroup<IDatePickerForm>;

  get toLocaleDateString() {
    return this.formGroup.value.datePicker ? this.formGroup.value.datePicker?.toLocaleDateString() : '';
  }

  ngOnInit(): void {
    const date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate())

    this.formGroup = new FormGroup<IDatePickerForm>({
      datePicker: new FormControl(date, { nonNullable: false })
    });
  }
}
