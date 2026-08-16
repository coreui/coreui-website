import { Component } from '@angular/core';
import { DropdownItemDirective, DropdownItemPlainDirective } from '@coreui/angular';

@Component({
  selector: 'docs-dropdown15',
  templateUrl: './dropdown15.component.html',
  imports: [DropdownItemPlainDirective, DropdownItemDirective],
  styles: `
    :host {
      .dropdown-menu {
        display: block;
        position: static;
      }
    }
  `
})
export class Dropdown15Component {}
