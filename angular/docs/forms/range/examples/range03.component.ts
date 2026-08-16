import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-range03',
  templateUrl: './range03.component.html',
  imports: [FormLabelDirective, FormControlDirective, ReactiveFormsModule, FormsModule]
})
export class Range03Component {
  min = 0;
  max = 6;
  readonly value = signal(4);
}
