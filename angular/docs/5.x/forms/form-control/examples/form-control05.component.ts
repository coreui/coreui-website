import { Component } from '@angular/core';
import { ColComponent, ColDirective, FormControlDirective, FormLabelDirective, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-form-control05',
  templateUrl: './form-control05.component.html',
  standalone: true,
  imports: [RowComponent, ColDirective, FormLabelDirective, ColComponent, FormControlDirective]
})
export class FormControl05Component {}
