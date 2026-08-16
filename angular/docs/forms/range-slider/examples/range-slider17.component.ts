import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RangeSliderComponent } from '@coreui/angular';

@Component({
  selector: 'docs-range-slider17',
  imports: [NgStyle, RangeSliderComponent],
  templateUrl: './range-slider17.component.html'
})
export class RangeSlider17Component {
  cssVars: Record<string, any> = {
    '--cui-range-slider-thumb-bg': 'green',
    '--cui-range-slider-track-bg': 'red',
    '--cui-range-slider-track-in-range-bg': 'blue'
  };
}
