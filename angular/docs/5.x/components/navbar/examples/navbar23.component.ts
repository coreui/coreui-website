import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { FormControlDirective } from '../../../../../../../coreui-angular/src/lib/form/form-control/form-control.directive';
import { FormDirective } from '../../../../../../../coreui-angular/src/lib/form/form/form.directive';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { NavbarNavComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-nav/navbar-nav.component';
import { NavbarBrandDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-brand/navbar-brand.directive';
import { CollapseDirective } from '../../../../../../../coreui-angular/src/lib/collapse/collapse.directive';
import { NavbarTogglerDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-toggler/navbar-toggler.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-navbar23',
    templateUrl: './navbar23.component.html',
    styles: [],
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarTogglerDirective, CollapseDirective, NavbarBrandDirective, NavbarNavComponent, NavItemComponent, NavLinkDirective, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar23Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
