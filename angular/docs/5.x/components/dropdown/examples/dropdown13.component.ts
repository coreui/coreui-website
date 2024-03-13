import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownHeaderDirective, DropdownItemDirective } from '@coreui/angular';

@Component({
  selector: 'docs-dropdown13',
  templateUrl: './dropdown13.component.html',
  standalone: true,
  imports: [DropdownHeaderDirective, DropdownItemDirective, RouterLink]
})
export class Dropdown13Component {}
