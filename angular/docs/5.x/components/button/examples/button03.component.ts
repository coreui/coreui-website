import { Component } from '@angular/core';
import { ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'docs-button03-example',
  templateUrl: './button03.component.html',
  standalone: true,
  imports: [ButtonDirective]
})
export class Button03Component {

  constructor() { }
}
