import { Component } from '@angular/core';
import { FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios03',
  templateUrl: './checks-radios03.component.html',
  standalone: true,
  imports: [FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective]
})
export class ChecksRadios03Component {}
