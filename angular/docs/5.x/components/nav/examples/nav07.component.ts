import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav.component';

@Component({
    selector: 'docs-nav07',
    templateUrl: './nav07.component.html',
    standalone: true,
    imports: [NavComponent, NavLinkDirective, RouterLink]
})
export class Nav07Component {
  constructor() {}
}
