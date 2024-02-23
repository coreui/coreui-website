import { Component } from '@angular/core';
import { ToastBodyComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-body/toast-body.component';
import { ToastSampleIconComponent } from './toast-sample-icon.component';
import { ToastHeaderComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-header/toast-header.component';
import { ToastComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast/toast.component';

@Component({
    selector: 'docs-toast01',
    templateUrl: './toast01.component.html',
    standalone: true,
    imports: [
        ToastComponent,
        ToastHeaderComponent,
        ToastSampleIconComponent,
        ToastBodyComponent,
    ],
})
export class Toast01Component  {

  constructor() { }

}
