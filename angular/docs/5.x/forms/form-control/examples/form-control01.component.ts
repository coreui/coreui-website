import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-form-control01',
  templateUrl: './form-control01.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective
  ]
})
export class FormControl01Component {}
