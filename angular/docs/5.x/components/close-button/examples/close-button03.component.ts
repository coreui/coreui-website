import { Component, OnInit } from '@angular/core';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';

@Component({
    selector: 'docs-close-button03',
    templateUrl: './close-button03.component.html',
    styleUrls: ['./close-button03.component.scss'],
    standalone: true,
    imports: [ThemeDirective, ButtonCloseDirective]
})
export class CloseButton03Component implements OnInit {

  constructor() { }

  ngOnInit(): void { }

}
