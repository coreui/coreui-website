import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  NavComponent,
  NavItemComponent,
  NavLinkDirective,
  TabContentComponent,
  TabContentRefDirective,
  TabPaneComponent
} from '@coreui/angular';

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
    NgIf
  ]
})
export class Tabs03Component {}
