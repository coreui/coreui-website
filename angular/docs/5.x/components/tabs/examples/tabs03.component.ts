import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { TabPaneComponent } from '../../../../../../../coreui-angular/src/lib/tabs/tab-pane/tab-pane.component';
import { TabContentComponent } from '../../../../../../../coreui-angular/src/lib/tabs/tab-content/tab-content.component';
import { RouterLink } from '@angular/router';
import { TabContentRefDirective } from '../../../../../../../coreui-angular/src/lib/tabs/tab-content-ref.directive';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavItemComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav-item.component';
import { NavComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav.component';

@Component({
    selector: 'docs-tabs03',
    templateUrl: './tabs03.component.html',
    standalone: true,
    imports: [
        NavComponent,
        NavItemComponent,
        NavLinkDirective,
        TabContentRefDirective,
        RouterLink,
        TabContentComponent,
        TabPaneComponent,
        NgIf,
    ],
})
export class Tabs03Component {
  constructor() {}
}
