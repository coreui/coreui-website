import { Component, OnInit } from '@angular/core';
import { NavbarBrandDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-brand/navbar-brand.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-navbar18',
    templateUrl: './navbar18.component.html',
    styles: [],
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, ContainerComponent, NavbarBrandDirective]
})
export class Navbar18Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
