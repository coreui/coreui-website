import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RangeSliderComponent } from '@coreui/angular';

@Component({
  selector: 'docs-range-slider16',
  imports: [RangeSliderComponent, JsonPipe, FormsModule],
  templateUrl: './range-slider16.component.html',
  styleUrl: './range-slider16.component.scss'
})
export class RangeSlider16Component {
  readonly singleValue = signal(60);
  readonly rangeValue = signal([40, 75]);
}
