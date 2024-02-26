import { Component } from '@angular/core';
import { ButtonCloseDirective } from '../../../../../../../coreui-angular/src/lib/button/button-close.directive';
import { ThemeDirective } from '../../../../../../../coreui-angular/src/lib/shared/theme.directive';
import { ToastBodyComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-body/toast-body.component';
import { ToastComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast/toast.component';

@Component({
    selector: 'docs-toast08',
    templateUrl: './toast08.component.html',
    standalone: true,
    imports: [ToastComponent, ToastBodyComponent, ThemeDirective, ButtonCloseDirective]
})
export class Toast08Component {
  constructor() {}
}
