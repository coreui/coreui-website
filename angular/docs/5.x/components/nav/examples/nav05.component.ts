import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { NavComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav.component';

@Component({
    selector: 'docs-nav05',
    templateUrl: './nav05.component.html',
    styleUrls: ['./nav01.component.scss'],
    standalone: true,
    imports: [
        NavComponent,
        NavItemComponent,
        NavLinkDirective,
        RouterLink,
    ],
})
export class Nav05Component {
  constructor() {}
}
