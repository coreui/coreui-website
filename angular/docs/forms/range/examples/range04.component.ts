import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-range04',
  templateUrl: './range04.component.html',
  imports: [FormLabelDirective, FormControlDirective, ReactiveFormsModule, FormsModule]
})
export class Range04Component {
  readonly value = signal(3);
}
