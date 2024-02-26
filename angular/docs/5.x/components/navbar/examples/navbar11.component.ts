import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { FormDirective } from '../../../../../../../coreui-angular/src/lib/form/form/form.directive';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-navbar11',
    templateUrl: './navbar11.component.html',
    styles: [],
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, FormDirective, ContainerComponent, ButtonDirective]
})
export class Navbar11Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
