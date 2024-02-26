import { Component, OnInit } from '@angular/core';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-close-button02',
    templateUrl: './close-button02.component.html',
    styleUrls: ['./close-button02.component.scss'],
    standalone: true,
    imports: [ThemeDirective, ButtonCloseDirective]
})
export class CloseButton02Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
