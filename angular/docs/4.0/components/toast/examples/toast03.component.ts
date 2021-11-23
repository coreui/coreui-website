import { Component, ViewChild } from '@angular/core';

import { ToasterComponent, ToasterPlacement } from '../../../../../../../coreui-angular/src/lib/toast/public_api';
import { AppToastSampleComponent } from './toast-sample.component';

@Component({
  selector: 'docs-toast03',
  templateUrl: './toast03.component.html',
  styleUrls: ['./toast03.component.scss']
})
export class Toast03Component  {

  placement = ToasterPlacement.TopCenter;

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor() { }

  addToast() {
    const options = {
      title: `CoreUI for Angular Toast`,
      delay: 5000,
      placement: this.placement,
      color: 'info',
      autohide: true,
    }
    const componentRef = this.toaster.addToast(AppToastSampleComponent, { ...options });
  }
}
