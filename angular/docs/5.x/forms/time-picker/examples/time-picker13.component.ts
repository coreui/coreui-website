import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ColComponent, RowComponent, TimePickerComponent } from '@coreui/angular';

interface ITimePickerForm {
  timePicker: FormControl<Date | undefined | null>;
}

@Component({
  selector: 'docs-time-picker13',
  templateUrl: './time-picker13.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, ReactiveFormsModule, TimePickerComponent, JsonPipe]
})
export class TimePicker13Component implements OnInit {

  time = new Date();

  formGroup!: FormGroup<ITimePickerForm>;

  get toLocaleTimeString() {
    return this.formGroup.value.timePicker ? this.formGroup.value.timePicker.toLocaleTimeString() : '';
  }

  ngOnInit(): void {
    this.time.setMilliseconds(0);
    this.time.setSeconds(0);
    this.time.setMinutes(15);
    this.time.setHours(11);

    this.formGroup = new FormGroup<ITimePickerForm>({
      timePicker: new FormControl(this.time, { nonNullable: false })
    });
  }

}
