import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface ITimePickerForm {
  timePicker: FormControl<Date | undefined | null>;
}

@Component({
  selector: 'docs-time-picker13',
  templateUrl: './time-picker13.component.html'
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
