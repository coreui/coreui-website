import { Component } from '@angular/core';
import { ButtonDirective, ButtonGroupComponent } from '@coreui/angular';

@Component({
  selector: 'docs-button-group02-example',
  templateUrl: './button-group02.component.html',
  standalone: true,
  imports: [ButtonGroupComponent, ButtonDirective]
})
export class ButtonGroup02Component {

  constructor() { }
}
