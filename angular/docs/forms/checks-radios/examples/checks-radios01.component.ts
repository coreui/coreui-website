import { Component } from '@angular/core';
import { FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective } from '@coreui/angular';

@Component({
  selector: 'docs-checks-radios01',
  templateUrl: './checks-radios01.component.html',
  imports: [FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective]
})
export class ChecksRadios01Component {}
