import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormLabelDirective,
  FormTextDirective,
  GutterDirective,
  RowComponent
} from '@coreui/angular';

@Component({
  selector: 'docs-overview03',
  templateUrl: './overview03.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    RowComponent,
    GutterDirective,
    ColComponent,
    FormLabelDirective,
    FormControlDirective,
    FormTextDirective
  ]
})
export class Overview03Component {}
