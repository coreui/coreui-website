import { Component } from '@angular/core';
import { ButtonDirective, ButtonGroupComponent } from '@coreui/angular';

@Component({
  selector: 'docs-button-group01-example',
  templateUrl: './button-group01.component.html',
  standalone: true,
  imports: [ButtonGroupComponent, ButtonDirective]
})
export class ButtonGroup01Component {

  constructor() { }
}
