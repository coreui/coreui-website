import { Component } from '@angular/core';
import { ButtonDirective, ButtonGroupComponent } from '@coreui/angular';

@Component({
  selector: 'docs-button-group04-example',
  templateUrl: './button-group04.component.html',
  standalone: true,
  imports: [ButtonGroupComponent, ButtonDirective]
})
export class ButtonGroup04Component {

  constructor() { }
}
