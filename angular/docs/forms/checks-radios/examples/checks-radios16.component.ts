import { JsonPipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios16',
  imports: [
    FormCheckComponent,
    FormCheckInputDirective,
    FormCheckLabelDirective,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe
  ],
  templateUrl: './checks-radios16.component.html'
})
export class ChecksRadios16Component {
  readonly checkIn = signal(true);
  readonly formGroup = new FormGroup({
    checkInCtrl: new FormControl({ value: true, disabled: false })
  });

  constructor() {
    setTimeout(() => {
      this.checkIn.set(false);
    }, 5000);

    setTimeout(() => {
      this.checkIn.set(true);
    }, 8000);

    effect(() => {
      this.formGroup.get('checkInCtrl')!.setValue(this.checkIn());
    });

    this.formGroup.valueChanges.pipe(takeUntilDestroyed()).subscribe((value) => {
      this.checkIn.set(value.checkInCtrl as boolean);
    });
  }
}
