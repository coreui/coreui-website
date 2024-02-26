import { Component } from '@angular/core';
import { FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios02',
  templateUrl: './checks-radios02.component.html',
  standalone: true,
  imports: [FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective]
})
export class ChecksRadios02Component {}
