import { Component } from '@angular/core';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { NavbarNavComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-nav/navbar-nav.component';
import { CollapseDirective } from '../../../../../../../coreui-angular/src/lib/collapse/collapse.directive';
import { NavbarTogglerDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-toggler/navbar-toggler.directive';
import { NavbarBrandDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-brand/navbar-brand.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-dropdown08',
    templateUrl: './dropdown08.component.html',
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective, NavbarTogglerDirective, CollapseDirective, NavbarNavComponent, NavItemComponent, DropdownComponent, DropdownToggleDirective, NavLinkDirective, DropdownMenuDirective, DropdownItemDirective]
})
export class Dropdown08Component {

}
