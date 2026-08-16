import { Component } from '@angular/core';
import { RangeSliderComponent } from '@coreui/angular';

@Component({
  template: `<c-range-slider [value]="42" />`,
  imports: [RangeSliderComponent],
  standalone: true
})
export class CustomAppComponent {}
