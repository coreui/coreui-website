import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonDirective,
  ButtonGroupComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-button-group12-example',
  templateUrl: './button-group12.component.html',
  standalone: true,
  imports: [
    ButtonGroupComponent,
    ButtonDirective,
    ThemeDirective,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective,
    RouterLink,
    DropdownDividerDirective
  ]
})
export class ButtonGroup12Component {

  constructor() { }
}
