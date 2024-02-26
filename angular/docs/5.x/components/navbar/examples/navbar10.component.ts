import { Component, OnInit } from '@angular/core';
import { FormControlDirective } from '../../../../../../../coreui-angular/src/lib/form/form-control/form-control.directive';
import { InputGroupTextDirective } from '../../../../../../../coreui-angular/src/lib/form/input-group-text/input-group-text.directive';
import { InputGroupComponent } from '../../../../../../../coreui-angular/src/lib/form/input-group/input-group.component';
import { ContainerComponent } from '../../../../../../../coreui-angular/src/lib/grid/container.component';
import { FormDirective } from '../../../../../../../coreui-angular/src/lib/form/form/form.directive';
import { NavbarComponent } from '../../../../../../../coreui-angular/src/lib/navbar/navbar.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-navbar10',
    templateUrl: './navbar10.component.html',
    styles: [],
    standalone: true,
    imports: [ThemeDirective, NavbarComponent, FormDirective, ContainerComponent, InputGroupComponent, InputGroupTextDirective, FormControlDirective]
})
export class Navbar10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
