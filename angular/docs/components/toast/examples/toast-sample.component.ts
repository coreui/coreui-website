import { Component, forwardRef, input } from '@angular/core';

import {
  ProgressComponent,
  ToastBodyComponent,
  ToastCloseDirective,
  ToastComponent,
  ToastContentComponent,
  ToastHeaderComponent
} from '@coreui/angular';
import { ToastSampleIconComponent } from './toast-sample-icon.component';

@Component({
  selector: 'app-toast-sample',
  templateUrl: './toast-sample.component.html',
  styles: [
    `
      :host {
        display: block;
        overflow: hidden;
      }
    `
  ],
  providers: [{ provide: ToastComponent, useExisting: forwardRef(() => AppToastSampleComponent) }],
  imports: [
    ToastHeaderComponent,
    ToastSampleIconComponent,
    ToastBodyComponent,
    ToastCloseDirective,
    ToastContentComponent,
    ProgressComponent
  ]
})
export class AppToastSampleComponent extends ToastComponent {
  constructor() {
    super();
  }

  readonly closeButton = input(true);
  readonly title = input('title');
}
