import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NavComponent,
  NavLinkDirective,
  TabContentComponent,
  TabContentRefDirective,
  TabPaneComponent
} from '@coreui/angular';

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
    TabPaneComponent
  ]
})
export class Tabs01Component {
  onChange($event: number) {
    console.log('onChange', $event);
  }
}
