import { Component } from '@angular/core';
import { INavData } from '@coreui/angular';
import { SidebarTogglerDirective } from '../../../../../../../coreui-angular/src/lib/sidebar/sidebar-toggler/sidebar-toggler.directive';
import { SidebarToggleDirective } from '../../../../../../../coreui-angular/src/lib/sidebar/sidebar-toggle/sidebar-toggle.directive';
import { SidebarFooterComponent } from '../../../../../../../coreui-angular/src/lib/sidebar/sidebar-footer/sidebar-footer.component';
import { SidebarNavComponent } from '../../../../../../../coreui-angular/src/lib/sidebar/sidebar-nav/sidebar-nav.component';
import { SidebarBrandComponent } from '../../../../../../../coreui-angular/src/lib/sidebar/sidebar-brand/sidebar-brand.component';
import { SidebarHeaderComponent } from '../../../../../../../coreui-angular/src/lib/sidebar/sidebar-header/sidebar-header.component';
import { SidebarComponent } from '../../../../../../../coreui-angular/src/lib/sidebar/sidebar/sidebar.component';

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
