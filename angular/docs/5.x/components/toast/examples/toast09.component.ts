import { Component, OnInit } from '@angular/core';
import { ToastBodyComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-body/toast-body.component';
import { ToastSampleIconComponent } from './toast-sample-icon.component';
import { ToastHeaderComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-header/toast-header.component';
import { ToastComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast/toast.component';
import { ToasterComponent } from '../../../../../../../coreui-angular/src/lib/toast/toaster/toaster.component';

@Component({
    selector: 'docs-toast09',
    templateUrl: './toast09.component.html',
    styleUrls: ['./toast09.component.scss'],
    standalone: true,
    imports: [ToasterComponent, ToastComponent, ToastHeaderComponent, ToastSampleIconComponent, ToastBodyComponent]
})
export class Toast09Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
