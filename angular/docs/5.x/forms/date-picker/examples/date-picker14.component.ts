import { DatePipe, JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColComponent, DatePickerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-date-picker14',
  templateUrl: './date-picker14.component.html',
  standalone: true,
  imports: [RowComponent, ColComponent, ReactiveFormsModule, FormsModule, DatePickerComponent, JsonPipe, DatePipe]
})
export class DatePicker14Component implements OnInit {

  date!: Date;

  ngOnInit(): void {
    const date = new Date();
    this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  }

}
