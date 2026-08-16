import { Component } from '@angular/core';
import { Label, RangeSliderComponent } from '@coreui/angular';

@Component({
  selector: 'docs-range-slider10',
  imports: [RangeSliderComponent],
  templateUrl: './range-slider10.component.html',
  styleUrl: './range-slider10.component.scss'
})
export class RangeSlider10Component {
  readonly labels: Label[] = [
    {
      value: -50,
      label: '-50°C',
      class: 'text-info fst-italic'
    },
    {
      value: 0,
      label: '0°C',
      style: {
        fontWeight: 'bold'
      }
    },
    {
      value: 20,
      label: '20°C',
      class: ['text-warning']
    },
    {
      value: 100,
      label: '100°C',
      class: { 'text-danger': true }
    }
  ];

  readonly tooltipsFormatFn = (value: number) => `${value}°C`;
}
