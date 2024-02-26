import { Component } from '@angular/core';
import { ToastCloseDirective } from '../../../../../../../coreui-angular/src/lib/toast/toast-close.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { ToastBodyComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-body/toast-body.component';
import { ToastComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast/toast.component';
import { ToasterComponent } from '../../../../../../../coreui-angular/src/lib/toast/toaster/toaster.component';

@Component({
    selector: 'docs-toast07',
    templateUrl: './toast07.component.html',
    standalone: true,
    imports: [ToasterComponent, ToastComponent, ToastBodyComponent, ButtonDirective, ToastCloseDirective]
})
export class Toast07Component {

  constructor() { }

}
