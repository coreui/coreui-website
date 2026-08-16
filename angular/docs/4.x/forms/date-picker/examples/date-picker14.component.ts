import { Component } from '@angular/core';

@Component({
  selector: 'docs-date-picker14',
  templateUrl: './date-picker14.component.html'
})
export class DatePicker14Component {

  date!: Date;

  ngOnInit(): void {
    const date = new Date()
    this.date = new Date(date.getFullYear(), date.getMonth(), date.getDate())
  }

}
