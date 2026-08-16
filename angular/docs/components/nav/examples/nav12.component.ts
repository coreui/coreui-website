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
  selector: 'docs-nav12',
  templateUrl: './nav12.component.html',
  styleUrls: ['./nav01.component.scss'],
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
export class Nav12Component {}
