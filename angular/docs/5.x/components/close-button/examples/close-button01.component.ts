import { Component, OnInit } from '@angular/core';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-close-button01',
    templateUrl: './close-button01.component.html',
    styleUrls: ['./close-button01.component.scss'],
    standalone: true,
    imports: [ThemeDirective, ButtonCloseDirective]
})
export class CloseButton01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
