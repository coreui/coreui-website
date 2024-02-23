import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-range03',
  templateUrl: './range03.component.html',
  standalone: true,
  imports: [FormLabelDirective, FormControlDirective, ReactiveFormsModule, FormsModule]
})
export class Range03Component {
  min = 0;
  max = 6;
  value = 4;
}
