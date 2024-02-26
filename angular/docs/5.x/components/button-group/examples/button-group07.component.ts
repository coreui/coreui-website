import { Component } from '@angular/core';
import { ButtonDirective, ButtonGroupComponent, ButtonToolbarComponent } from '@coreui/angular';

@Component({
  selector: 'docs-button-group07-example',
  templateUrl: './button-group07.component.html',
  standalone: true,
  imports: [
    ButtonToolbarComponent,
    ButtonGroupComponent,
    ButtonDirective
  ]
})
export class ButtonGroup07Component {

  constructor() { }
}
