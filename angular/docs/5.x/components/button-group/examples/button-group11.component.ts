import { Component } from '@angular/core';
import { ButtonDirective, ButtonGroupComponent } from '@coreui/angular';

@Component({
  selector: 'docs-button-group11-example',
  templateUrl: './button-group11.component.html',
  standalone: true,
  imports: [ButtonGroupComponent, ButtonDirective]
})
export class ButtonGroup11Component {

  constructor() { }
}
