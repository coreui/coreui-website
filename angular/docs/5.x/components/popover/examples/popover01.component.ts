import { Component, OnInit } from '@angular/core';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { PopoverDirective } from '../../../../../../../coreui-angular/src/lib/popover/popover.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-popover01',
    templateUrl: './popover01.component.html',
    standalone: true,
    imports: [
        ButtonDirective,
        PopoverDirective,
        TextColorDirective,
    ],
})
export class Popover01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
