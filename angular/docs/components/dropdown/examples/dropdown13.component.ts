import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownHeaderDirective, DropdownItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-dropdown13',
  templateUrl: './dropdown13.component.html',
  imports: [DropdownHeaderDirective, DropdownItemDirective, RouterLink],
  styles: `
    :host {
      .dropdown-menu {
        display: block;
        position: static;
      }
    }
  `
})
export class Dropdown13Component {}
