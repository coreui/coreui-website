import { Component, OnInit } from '@angular/core';
import { PopoverDirective } from '../../../../../../../coreui-angular/src/lib/popover/popover.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';

@Component({
    selector: 'docs-popover02',
    templateUrl: './popover02.component.html',
    standalone: true,
    imports: [ButtonDirective, PopoverDirective],
})
export class Popover02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
