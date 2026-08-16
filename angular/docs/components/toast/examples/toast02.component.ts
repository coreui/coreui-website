import { Component, signal } from '@angular/core';
import {
  ButtonDirective,
  ProgressComponent,
  ToastBodyComponent,
  ToastComponent,
  ToasterComponent,
  ToastHeaderComponent
} from '@coreui/angular';
import { ToastSampleIconComponent } from './toast-sample-icon.component';

@Component({
  selector: 'docs-toast02',
  templateUrl: './toast02.component.html',
  imports: [
    ButtonDirective,
    ProgressComponent,
    ToasterComponent,
    ToastComponent,
    ToastHeaderComponent,
    ToastSampleIconComponent,
    ToastBodyComponent
  ]
})
export class Toast02Component {
  position = 'top-end';
  readonly visible = signal(false);
  readonly percentage = signal(0);

  toggleToast() {
    this.visible.update((value) => !value);
  }

  onVisibleChange($event: boolean) {
    this.visible.set($event);
    this.percentage.set(this.visible() ? this.percentage() : 0);
  }

  onTimerChange($event: number) {
    this.percentage.set($event * 25);
  }
}
