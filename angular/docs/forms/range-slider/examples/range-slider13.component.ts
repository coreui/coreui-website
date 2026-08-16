import { Component } from '@angular/core';
import { Label, RangeSliderComponent } from '@coreui/angular';

@Component({
  selector: 'docs-range-slider13',
  imports: [RangeSliderComponent],
  templateUrl: './range-slider13.component.html',
  styleUrl: './range-slider13.component.scss'
})
export class RangeSlider13Component {
  readonly tooltipsFormatFn = (value: number) => `$${value}`;

  readonly labels: Label[] = [
    {
      value: 0,
      label: '$0'
    },
    {
      value: 250,
      label: '$250'
    },
    {
      value: 500,
      label: '$500'
    },
    {
      value: 1000,
      label: '$1000'
    }
  ];
}
