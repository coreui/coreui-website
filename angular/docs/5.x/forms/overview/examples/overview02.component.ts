import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControlDirective, FormDirective, FormLabelDirective, FormTextDirective } from '@coreui/angular';

@Component({
  selector: 'docs-overview02',
  templateUrl: './overview02.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormTextDirective
  ]
})
export class Overview02Component {}
