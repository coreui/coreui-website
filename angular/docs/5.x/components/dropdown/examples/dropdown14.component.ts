import { Component } from '@angular/core';
import { DropdownDividerDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-divider/dropdown-divider.directive';
import { RouterLink } from '@angular/router';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';

@Component({
    selector: 'docs-dropdown14',
    templateUrl: './dropdown14.component.html',
    standalone: true,
    imports: [DropdownItemDirective, RouterLink, DropdownDividerDirective]
})
export class Dropdown14Component {
}
