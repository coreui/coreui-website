import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownDividerDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-divider/dropdown-divider.directive';
import { FormCheckLabelDirective } from '../../../../../../../coreui-angular/src/lib/form/form-check/form-check-label.directive';
import { FormCheckInputDirective } from '../../../../../../../coreui-angular/src/lib/form/form-check/form-check-input.directive';
import { FormCheckComponent } from '../../../../../../../coreui-angular/src/lib/form/form-check/form-check.component';
import { FormControlDirective } from '../../../../../../../coreui-angular/src/lib/form/form-control/form-control.directive';
import { FormLabelDirective } from '../../../../../../../coreui-angular/src/lib/form/form-label/form-label.directive';
import { FormDirective } from '../../../../../../../coreui-angular/src/lib/form/form/form.directive';
import { DropdownCloseDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-close/dropdown-close.directive';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { NgStyle } from '@angular/common';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-dropdown20',
    templateUrl: './dropdown20.component.html',
    standalone: true,
    imports: [ThemeDirective, DropdownComponent, ButtonDirective, DropdownToggleDirective, DropdownMenuDirective, NgStyle, ButtonCloseDirective, DropdownCloseDirective, FormDirective, FormLabelDirective, FormControlDirective, FormCheckComponent, FormCheckInputDirective, FormCheckLabelDirective, DropdownDividerDirective, DropdownItemDirective, RouterLink]
})
export class Dropdown20Component {
}
