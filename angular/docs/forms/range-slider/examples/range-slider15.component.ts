import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RangeSliderComponent } from '@coreui/angular';

@Component({
  selector: 'docs-range-slider15',
  imports: [RangeSliderComponent, ReactiveFormsModule, JsonPipe, AsyncPipe],
  templateUrl: './range-slider15.component.html',
  styleUrl: './range-slider15.component.scss'
})
export class RangeSlider15Component {
  readonly formGroup = new FormGroup({
    rangeSlider: new FormControl([50, 75]),
    singleSlider: new FormControl({ value: 60, disabled: false })
  });

  readonly formGroup$ = this.formGroup.valueChanges;
}
