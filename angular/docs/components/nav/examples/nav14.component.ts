import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  DropdownComponent,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  NavComponent,
  NavItemComponent,
  NavLinkDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-nav14',
  templateUrl: './nav14.component.html',
  imports: [
    NavComponent,
    NavItemComponent,
    NavLinkDirective,
    RouterLink,
    DropdownComponent,
    DropdownToggleDirective,
    DropdownMenuDirective,
    DropdownItemDirective
  ]
})
export class Nav14Component {}
