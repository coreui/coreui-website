import { Component } from '@angular/core';
import {
  INavData,
  SidebarBrandComponent,
  SidebarComponent,
  SidebarFooterComponent,
  SidebarHeaderComponent,
  SidebarNavComponent,
  SidebarToggleDirective,
  SidebarTogglerDirective
} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Nav Title'
  },
  {
    name: 'Nav item',
    // url: '#',
    iconComponent: { name: 'cilSpeedometer' }
  },
  {
    name: 'With badge',
    iconComponent: { name: 'cilSpeedometer' },
    // url: '#',
    badge: {
      text: 'NEW',
      color: 'primary'
    }
  },
  {
    name: 'Nav dropdown',
    iconComponent: { name: 'cilPuzzle' },
    children: [
      {
        name: 'Nav dropdown item',
        url: './',
        iconComponent: { name: 'cilPuzzle' }
      },
      {
        name: 'Nav dropdown item',
        url: './',
        iconComponent: { name: 'cilPuzzle' }
      }
    ]
  }
];

@Component({
  selector: 'docs-sidebar01',
  templateUrl: './sidebar01.component.html',
  styleUrls: ['./sidebar01.component.scss'],
  standalone: true,
  imports: [SidebarComponent, SidebarHeaderComponent, SidebarBrandComponent, SidebarNavComponent, SidebarFooterComponent, SidebarToggleDirective, SidebarTogglerDirective]
})
export class Sidebar01Component {

  public navItems = navItems;

}
