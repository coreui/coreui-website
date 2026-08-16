import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from '@coreui/angular';

@Component({
  selector: 'docs-rating13',
  imports: [RatingComponent, ReactiveFormsModule, JsonPipe],
  templateUrl: './rating13.component.html'
})
export class Rating13Component {
  readonly formGroup = new FormGroup({
    ratingControl: new FormControl<null | number>(3, { nonNullable: false })
  });

  readonly formValue = signal(this.formGroup.value);

  constructor() {
    this.formGroup.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      this.formValue.set(value);
    });
  }
}
