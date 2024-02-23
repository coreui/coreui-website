import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { NgFor } from '@angular/common';

@Component({
    selector: 'docs-dropdown03',
    templateUrl: './dropdown03.component.html',
    standalone: true,
    imports: [NgFor, ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, DropdownItemDirective, RouterLink]
})
export class Dropdown03Component {

  public colors = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];

}
