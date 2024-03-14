import { Component, ViewChild } from '@angular/core';

import { ButtonDirective, ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastSampleComponent } from './toast-sample.component';

@Component({
  selector: 'docs-toast03',
  templateUrl: './toast03.component.html',
  standalone: true,
  imports: [ToasterComponent, ButtonDirective]
})
export class Toast03Component {

  placement = ToasterPlacement.TopCenter;

  @ViewChild(ToasterComponent) toaster!: ToasterComponent;

  constructor() { }

  addToast() {
    const options = {
      title: `CoreUI for Angular Toast`,
      delay: 5000,
      placement: this.placement,
      color: 'info',
      autohide: true
    };
    const componentRef = this.toaster.addToast(AppToastSampleComponent, { ...options });
  }
}
