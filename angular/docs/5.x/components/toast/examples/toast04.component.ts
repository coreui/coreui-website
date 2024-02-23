import { Component } from '@angular/core';
import { ToastBodyComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-body/toast-body.component';
import { ToastSampleIconComponent } from './toast-sample-icon.component';
import { ToastHeaderComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-header/toast-header.component';
import { ToastComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast/toast.component';

@Component({
    selector: 'docs-toast04',
    templateUrl: './toast04.component.html',
    standalone: true,
    imports: [ToastComponent, ToastHeaderComponent, ToastSampleIconComponent, ToastBodyComponent]
})
export class Toast04Component {

  constructor() { }

}
