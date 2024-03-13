import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  selector: 'docs-tabs02',
  templateUrl: './tabs02.component.html',
  standalone: true,
  imports: [NavComponent, NgFor, NavItemComponent, NavLinkDirective, TabContentRefDirective, RouterLink, TabContentComponent, TabPaneComponent]
})
export class Tabs02Component implements OnInit {
  public panes = [
    { name: 'Home 01', content: 'One' },
    { name: 'Profile 02', content: 'Two' },
    { name: 'Contact 03', content: 'Three' },
    { name: 'Disabled 04', content: 'Four' }
  ];

  activePane = 0;

  onTabChange($event: number) {
    this.activePane = $event;
    console.log('onTabChange', $event);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.activePane = 1;
      setTimeout(() => {
        this.activePane = 2;
        setTimeout(() => {
          this.activePane = 0;
        }, 3000);
      }, 3000);
    }, 3000);
  }
}
