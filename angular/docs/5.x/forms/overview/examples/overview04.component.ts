import { Component } from '@angular/core';
import { FormControlDirective, FormLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-overview04',
  templateUrl: './overview04.component.html',
  standalone: true,
  imports: [FormLabelDirective, FormControlDirective]
})
export class Overview04Component {}
