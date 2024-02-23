import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { FormControlDirective } from '../../../../../../../coreui-angular/src/lib/form/form-control/form-control.directive';
import { FormDirective } from '../../../../../../../coreui-angular/src/lib/form/form/form.directive';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-navbar08',
    templateUrl: './navbar08.component.html',
    styleUrls: ['./navbar08.component.scss'],
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, ContainerComponent, FormDirective, FormControlDirective, ButtonDirective]
})
export class Navbar08Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
