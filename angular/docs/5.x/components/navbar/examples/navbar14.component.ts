import { Component, OnInit } from '@angular/core';
import { NavbarBrandDirective } from '../../../../../../../coreui-angular/src/lib/navbar/navbar-brand/navbar-brand.directive';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';

@Component({
    selector: 'docs-navbar14',
    templateUrl: './navbar14.component.html',
    styles: [],
    standalone: true,
    imports: [ContainerComponent, ThemeDirective, NavbarComponent, NavbarBrandDirective]
})
export class Navbar14Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
