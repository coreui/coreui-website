import { Component } from '@angular/core';
import {
  ButtonDirective,
  ButtonGroupComponent,
  ButtonToolbarComponent,
  FormControlDirective,
  InputGroupComponent,
  InputGroupTextDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-button-group08-example',
  templateUrl: './button-group08.component.html',
  imports: [
    ButtonToolbarComponent,
    ButtonGroupComponent,
    ButtonDirective,
    InputGroupComponent,
    InputGroupTextDirective,
    FormControlDirective
  ]
})
export class ButtonGroup08Component {}
