import { Component } from '@angular/core';
import { ButtonDirective, SpinnerComponent } from '@coreui/angular';

@Component({
  selector: 'docs-spinner07',
  templateUrl: './spinner07.component.html',
  standalone: true,
  imports: [ButtonDirective, SpinnerComponent]
})
export class Spinner07Component {}
