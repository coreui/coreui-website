import { Component } from '@angular/core';
import { NavbarTogglerDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-toggler/navbar-toggler.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { CollapseDirective } from '../../../../../../../coreui-angular/src/lib/collapse/collapse.directive';

@Component({
    selector: 'docs-navbar26',
    templateUrl: './navbar26.component.html',
    styles: [],
    standalone: true,
    imports: [CollapseDirective, ThemeDirective, NavbarComponent, ContainerComponent, NavbarTogglerDirective]
})
export class Navbar26Component {
}
