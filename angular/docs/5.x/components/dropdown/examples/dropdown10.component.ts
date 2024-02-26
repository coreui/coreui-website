import { Component, OnInit } from '@angular/core';
import { DropdownItemDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-item/dropdown-item.directive';
import { DropdownMenuDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown-menu/dropdown-menu.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { DropdownComponent, DropdownToggleDirective } from '../../../../../../../coreui-angular/src/lib/dropdown/dropdown/dropdown.component';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-dropdown10',
    templateUrl: './dropdown10.component.html',
    standalone: true,
    imports: [
        ThemeDirective,
        DropdownComponent,
        ButtonDirective,
        DropdownToggleDirective,
        DropdownMenuDirective,
        DropdownItemDirective,
    ],
})
export class Dropdown10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
