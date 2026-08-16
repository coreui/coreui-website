import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-range01',
  templateUrl: './range01.component.html',
  imports: [FormLabelDirective, FormControlDirective, ReactiveFormsModule, FormsModule]
})
export class Range01Component {
  readonly value = signal(50);
}
