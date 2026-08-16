import { Component } from '@angular/core';
import { DropdownItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-dropdown17',
  templateUrl: './dropdown17.component.html',
  imports: [DropdownItemDirective],
  styles: `
    :host {
      .dropdown-menu {
        display: block;
        position: static;
      }
    }
  `
})
export class Dropdown17Component {}
