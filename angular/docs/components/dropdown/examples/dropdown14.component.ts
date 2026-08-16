import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownDividerDirective, DropdownItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-dropdown14',
  templateUrl: './dropdown14.component.html',
  imports: [DropdownItemDirective, RouterLink, DropdownDividerDirective],
  styles: `
    :host {
      .dropdown-menu {
        display: block;
        position: static;
      }
    }
  `
})
export class Dropdown14Component {}
