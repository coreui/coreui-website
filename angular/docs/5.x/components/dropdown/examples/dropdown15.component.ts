import { Component } from '@angular/core';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownItemPlainDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item-plain.directive';

@Component({
    selector: 'docs-dropdown15',
    templateUrl: './dropdown15.component.html',
    standalone: true,
    imports: [DropdownItemPlainDirective, DropdownItemDirective]
})
export class Dropdown15Component {

}
