import { Component, OnInit } from '@angular/core';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-close-button04',
    templateUrl: './close-button04.component.html',
    styleUrls: ['./close-button04.component.scss'],
    standalone: true,
    imports: [ThemeDirective, ButtonCloseDirective]
})
export class CloseButton04Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
