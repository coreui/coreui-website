import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

interface IDatePickerForm {
  datePicker: FormControl<Date | undefined | null>;
}

@Component({
  selector: 'docs-date-picker13',
  templateUrl: './date-picker13.component.html',
  imports: [RowComponent, ColComponent, ReactiveFormsModule, DatePickerComponent, JsonPipe]
})
export class DatePicker13Component implements OnInit {
  date = new Date();

  formGroup!: FormGroup<IDatePickerForm>;

  readonly #toLocaleDateString = signal('');

  get toLocaleDateString() {
    return this.#toLocaleDateString();
  }

  ngOnInit(): void {
    const date = new Date(this.date.getFullYear(), this.date.getMonth(), this.date.getDate());

    this.formGroup = new FormGroup<IDatePickerForm>({
      datePicker: new FormControl(date, { nonNullable: false })
    });

    this.formGroup.valueChanges.subscribe((value) => {
      this.#toLocaleDateString.set(value.datePicker?.toLocaleDateString() ?? '');
    });
  }
}
