import { Component } from '@angular/core';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-range02',
  templateUrl: './range02.component.html',
  imports: [FormLabelDirective, FormControlDirective]
})
export class Range02Component {}
