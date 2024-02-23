import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav.component';

@Component({
    selector: 'docs-nav02',
    templateUrl: './nav02.component.html',
    styleUrls: ['./nav01.component.scss'],
    standalone: true,
    imports: [
        NavComponent,
        NavLinkDirective,
        RouterLink,
    ],
})
export class Nav02Component {
  constructor() {}
}
