import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-dropdown19',
    templateUrl: './dropdown19.component.html',
    standalone: true,
    imports: [ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, NgStyle]
})
export class Dropdown19Component {
}
