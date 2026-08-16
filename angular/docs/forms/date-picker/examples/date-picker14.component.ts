import { DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-picker14',
  templateUrl: './date-picker14.component.html',
  imports: [RowComponent, ColComponent, ReactiveFormsModule, FormsModule, DatePickerComponent, JsonPipe, DatePipe]
})
export class DatePicker14Component implements OnInit {
  readonly date = signal<Date | undefined>(undefined);

  ngOnInit(): void {
    const date = new Date();
    this.date.set(new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1));
  }
}
