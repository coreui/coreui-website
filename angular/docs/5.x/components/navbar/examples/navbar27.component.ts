import { Component } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { FormControlDirective } from '../../../../../../../coreui-angular/src/lib/form/form-control/form-control.directive';
import { FormDirective } from '../../../../../../../coreui-angular/src/lib/form/form/form.directive';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { NavbarNavComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-nav/navbar-nav.component';
import { OffcanvasBodyComponent } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas-body/offcanvas-body.component';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { OffcanvasTitleDirective } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas-title/offcanvas-title.directive';
import { OffcanvasHeaderComponent } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas-header/offcanvas-header.component';
import { OffcanvasComponent } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas/offcanvas.component';
import { NavbarTogglerDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-toggler/navbar-toggler.directive';
import { OffcanvasToggleDirective } from '../../../../../../../coreui-angular/src/lib/offcanvas/offcanvas-toggle/offcanvas-toggle.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-navbar27',
    templateUrl: './navbar27.component.html',
    styles: [],
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, ContainerComponent, OffcanvasToggleDirective, NavbarTogglerDirective, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, ButtonCloseDirective, OffcanvasBodyComponent, NavbarNavComponent, NavItemComponent, NavLinkDirective, DropdownComponent, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar27Component {
}
