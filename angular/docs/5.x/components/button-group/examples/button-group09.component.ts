import { Component } from '@angular/core';
import { ButtonDirective, ButtonGroupComponent } from '@coreui/angular';

@Component({
  selector: 'docs-button-group09-example',
  templateUrl: './button-group09.component.html',
  standalone: true,
  imports: [ButtonGroupComponent, ButtonDirective]
})
export class ButtonGroup09Component {

  constructor() { }
}
