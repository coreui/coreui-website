import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderBrandComponent,
  HeaderComponent,
  HeaderDividerComponent,
  HeaderNavComponent,
  HeaderTextComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-header01',
  templateUrl: './header01.component.html',
  styleUrls: ['./header01.component.scss'],
  standalone: true,
  imports: [
    RouterLink,
    ContainerComponent,
    DropdownComponent,
    DropdownDividerDirective,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    HeaderBrandComponent,
    HeaderComponent,
    HeaderDividerComponent,
    HeaderNavComponent,
    HeaderTextComponent,
    HeaderTogglerDirective,
    NavItemComponent,
    NavLinkDirective,
    ThemeDirective
  ]
})
export class Header01Component {
  visible = true;
}
