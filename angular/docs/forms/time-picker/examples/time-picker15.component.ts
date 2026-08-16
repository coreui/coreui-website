import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {
  ButtonCloseDirective,
  ButtonDirective,
  ColComponent,
  DatePickerComponent,
  FormDirective,
  ModalModule,
  RowComponent,
  TimePickerComponent
} from '@coreui/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'docs-time-picker15',
  templateUrl: './time-picker15.component.html',
  standalone: true,
  imports: [
    RowComponent,
    ColComponent,
    FormDirective,
    ReactiveFormsModule,
    TimePickerComponent,
    DatePickerComponent,
    ButtonCloseDirective,
    ButtonDirective,
    ModalModule,
    JsonPipe
  ]
})
export class TimePicker15Component implements OnInit {
  readonly formBuilder = inject(FormBuilder);

  planDateVisible = false;
  addPlanDateForm!: FormGroup;

  ngOnInit(): void {
    const currentDate = new Date(); // Yerel tarih
    const startTime = new Date(currentDate.setHours(9, 0, 0, 0));
    const endTime = new Date(currentDate.setHours(18, 0, 0, 0));
    this.addPlanDateForm = this.formBuilder.group({
      startDate: [currentDate],
      startTime: [startTime, Validators.required],
      endDate: [currentDate],
      endTime: [endTime, Validators.required]
    });

    this.addPlanDateForm.get('startDate')?.valueChanges.subscribe((newDate: Date) => {
      const currentStartTime = this.addPlanDateForm.get('startTime')?.value;
      const hours = currentStartTime.getHours();
      const minutes = currentStartTime.getMinutes();
      const updatedDate = new Date(newDate.setHours(hours, minutes, 0, 0));
      this.addPlanDateForm.patchValue({ startDate: updatedDate, startTime: updatedDate }, { emitEvent: false });
      // this.addPlanDateForm.get('startTime')?.setValue(updatedDate, { emitEvent: false });
      // this.addPlanDateForm.get('startDate')?.setValue(updatedDate, { emitEvent: false });
    });

    this.addPlanDateForm.get('startTime')?.valueChanges.subscribe((newTime: Date) => {
      const currentStartDate = this.addPlanDateForm.get('startDate')?.value;
      const hours = newTime.getHours();
      const minutes = newTime.getMinutes();
      const updatedDate = new Date(currentStartDate.setHours(hours, minutes, 0, 0));
      this.addPlanDateForm.get('startDate')?.setValue(updatedDate, { emitEvent: false });
    });

    this.addPlanDateForm.get('endDate')?.valueChanges.subscribe((newDate: Date) => {
      const currentStartTime = this.addPlanDateForm.get('endTime')?.value;
      const hours = currentStartTime.getHours();
      const minutes = currentStartTime.getMinutes();
      const updatedDate = new Date(newDate.setHours(hours, minutes, 0, 0));
      this.addPlanDateForm.patchValue({ endDate: updatedDate, endTime: updatedDate }, { emitEvent: false });
      // this.addPlanDateForm.get('startTime')?.setValue(updatedDate, { emitEvent: false });
      // this.addPlanDateForm.get('startDate')?.setValue(updatedDate, { emitEvent: false });
    });

    this.addPlanDateForm.get('endTime')?.valueChanges.subscribe((newTime: Date) => {
      const currentStartDate = this.addPlanDateForm.get('endDate')?.value;
      const hours = newTime.getHours();
      const minutes = newTime.getMinutes();
      const updatedDate = new Date(currentStartDate.setHours(hours, minutes, 0, 0));
      this.addPlanDateForm.get('endDate')?.setValue(updatedDate, { emitEvent: false });
    });
  }

  handlePlanDateChange($event: boolean) {
    this.planDateVisible = $event;
    // console.log($event);
  }

  togglePlanDate() {
    this.planDateVisible = !this.planDateVisible;
  }

  savePlanDate() {
    console.log(this.addPlanDateForm.value);
  }

  createAddPlanDateForm() {
    this.addPlanDateForm = this.formBuilder.group({
      startDate: [new Date()],
      startTime: ['00:00', Validators.required],
      endDate: [new Date()],
      endTime: ['06:00', Validators.required]
    });
  }
}
