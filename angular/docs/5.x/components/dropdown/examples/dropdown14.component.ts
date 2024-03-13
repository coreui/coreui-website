import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownDividerDirective, DropdownItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-dropdown14',
  templateUrl: './dropdown14.component.html',
  standalone: true,
  imports: [DropdownItemDirective, RouterLink, DropdownDividerDirective]
})
export class Dropdown14Component {}
