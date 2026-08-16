import { Component } from '@angular/core';
import { RangeSliderComponent } from '@coreui/angular';

@Component({
  selector: 'docs-range-slider01',
  imports: [RangeSliderComponent],
  templateUrl: './range-slider01.component.html',
  styleUrl: './range-slider01.component.scss'
})
export class RangeSlider01Component {
  handleValueChange($event: number | number[]) {
    console.log('handleValueChange', $event);
  }
}
