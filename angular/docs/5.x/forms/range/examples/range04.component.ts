import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-range04',
  templateUrl: './range04.component.html',
  standalone: true,
  imports: [FormLabelDirective, FormControlDirective, ReactiveFormsModule, FormsModule]
})
export class Range04Component {
  value = 3;
}
