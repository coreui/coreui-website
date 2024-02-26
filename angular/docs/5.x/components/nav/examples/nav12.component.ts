import { Component } from '@angular/core';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { RouterLink } from '@angular/router';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { NavComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav.component';

@Component({
    selector: 'docs-nav12',
    templateUrl: './nav12.component.html',
    styleUrls: ['./nav01.component.scss'],
    standalone: true,
    imports: [
        NavComponent,
        NavItemComponent,
        NavLinkDirective,
        RouterLink,
        ThemeDirective,
        DropdownComponent,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective,
    ],
})
export class Nav12Component {
  constructor() {}
}
