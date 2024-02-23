import { Component, ViewChild } from '@angular/core';

import { ToasterComponent, ToasterPlacement } from '@coreui/angular';
import { AppToastSampleComponent } from './toast-sample.component';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { ToasterComponent as ToasterComponent_1 } from '../../../../../../../coreui-angular/src/lib/toast/toaster/toaster.component';

@Component({
    selector: 'docs-toast03',
    templateUrl: './toast03.component.html',
    styleUrls: ['./toast03.component.scss'],
    standalone: true,
    imports: [ToasterComponent_1, ButtonDirective]
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
