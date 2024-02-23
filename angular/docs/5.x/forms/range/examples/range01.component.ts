import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-range01',
  templateUrl: './range01.component.html',
  standalone: true,
  imports: [
    FormLabelDirective,
    FormControlDirective,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class Range01Component {
  value = 50;
}
