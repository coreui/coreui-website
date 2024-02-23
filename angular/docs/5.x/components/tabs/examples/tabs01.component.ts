import { Component } from '@angular/core';
import { TabPaneComponent } from '../../../../../../../coreui-angular/src/lib/tabs/tab-pane/tab-pane.component';
import { TabContentComponent } from '../../../../../../../coreui-angular/src/lib/tabs/tab-content/tab-content.component';
import { RouterLink } from '@angular/router';
import { TabContentRefDirective } from '../../../../../../../coreui-angular/src/lib/tabs/tab-content-ref.directive';
import { NavLinkDirective } from '../../../../../../../coreui-angular/src/lib/nav/nav-link.directive';
import { NavComponent } from '../../../../../../../coreui-angular/src/lib/nav/nav.component';

@Component({
    selector: 'docs-tabs01',
    templateUrl: './tabs01.component.html',
    standalone: true,
    imports: [
        NavComponent,
        NavLinkDirective,
        TabContentRefDirective,
        RouterLink,
        TabContentComponent,
        TabPaneComponent,
    ],
})
export class Tabs01Component {
  constructor() {}

  onChange($event: number) {
    console.log('onChange', $event)
  }
}
