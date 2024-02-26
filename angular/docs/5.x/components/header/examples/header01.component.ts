import { Component, OnInit } from '@angular/core';
import { HeaderTextComponent } from '../../../../../../../coreui-angular/src/lib/header/header-text/header-text.component';
import { HeaderDividerComponent } from '../../../../../../../coreui-angular/src/lib/header/header-divider/header-divider.component';
import { DropdownDividerDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-divider/dropdown-divider.directive';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { HeaderTogglerDirective } from '../../../../../../../coreui-angular/src/lib/header/header-toggler/header-toggler.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { HeaderNavComponent } from '../../../../../../../coreui-angular/src/lib/header/header-nav/header-nav.component';
import { RouterLink } from '@angular/router';
import { HeaderBrandComponent } from '../../../../../../../coreui-angular/src/lib/header/header-brand/header-brand.component';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { HeaderComponent } from '../../../../../../../coreui-angular/src/lib/header/header/header.component';

@Component({
    selector: 'docs-header01',
    templateUrl: './header01.component.html',
    styleUrls: ['./header01.component.scss'],
    standalone: true,
    imports: [HeaderComponent, ContainerComponent, HeaderBrandComponent, RouterLink, HeaderNavComponent, NavItemComponent, NavLinkDirective, ThemeDirective, DropdownComponent, HeaderTogglerDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, DropdownDividerDirective, HeaderDividerComponent, HeaderTextComponent]
})
export class Header01Component implements OnInit {

  visible = true;

  constructor() { }

  ngOnInit(): void {
  }

}
