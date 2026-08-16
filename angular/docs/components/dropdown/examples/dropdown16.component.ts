import { Component } from '@angular/core';
import { DropdownItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-dropdown16',
  templateUrl: './dropdown16.component.html',
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
export class Dropdown16Component {}
