import { Component, OnInit } from '@angular/core';
import { NavbarTextComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-text/navbar-text.component';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-navbar12',
    templateUrl: './navbar12.component.html',
    styles: [],
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarTextComponent]
})
export class Navbar12Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
