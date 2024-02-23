import { Component } from '@angular/core';
import { ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'docs-button01-example',
  templateUrl: './button01.component.html',
  standalone: true,
  imports: [ButtonDirective]
})
export class Button01Component {

  constructor() { }
}
