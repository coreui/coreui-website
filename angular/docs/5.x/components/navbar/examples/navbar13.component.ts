import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { FormControlDirective } from '../../../../../../../coreui-angular/src/lib/form/form-control/form-control.directive';
import { FormDirective } from '../../../../../../../coreui-angular/src/lib/form/form/form.directive';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { NavbarNavComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-nav/navbar-nav.component';
import { CollapseDirective } from '../../../../../../../coreui-angular/src/lib/collapse/collapse.directive';
import { NavbarTogglerDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-toggler/navbar-toggler.directive';
import { NavbarBrandDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-brand/navbar-brand.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-navbar13',
    templateUrl: './navbar13.component.html',
    styles: [],
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective, NavbarTogglerDirective, CollapseDirective, NavbarNavComponent, NavItemComponent, NavLinkDirective, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, FormDirective, FormControlDirective, ButtonDirective, NgStyle]
})
export class Navbar13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
