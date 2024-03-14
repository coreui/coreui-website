import { Component } from '@angular/core';
import { ButtonDirective, SpinnerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-spinner06',
  templateUrl: './spinner06.component.html',
  standalone: true,
  imports: [ButtonDirective, SpinnerComponent]
})
export class Spinner06Component {}
