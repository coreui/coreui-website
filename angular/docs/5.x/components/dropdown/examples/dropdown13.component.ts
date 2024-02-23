import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownHeaderDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-header/dropdown-header.directive';

@Component({
    selector: 'docs-dropdown13',
    templateUrl: './dropdown13.component.html',
    standalone: true,
    imports: [DropdownHeaderDirective, DropdownItemDirective, RouterLink]
})
export class Dropdown13Component {}
