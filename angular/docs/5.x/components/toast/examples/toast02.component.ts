import { Component } from '@angular/core';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { ProgressBarComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.component';
import { ProgressComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress.component';
import { ProgressBarDirective } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.directive';
import { ToastBodyComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-body/toast-body.component';
import { ToastSampleIconComponent } from './toast-sample-icon.component';
import { ToastHeaderComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-header/toast-header.component';
import { ToastComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast/toast.component';
import { ToasterComponent } from '../../../../../../../coreui-angular/src/lib/toast/toaster/toaster.component';

@Component({
    selector: 'docs-toast02',
    templateUrl: './toast02.component.html',
    standalone: true,
    imports: [ToasterComponent, ToastComponent, ToastHeaderComponent, ToastSampleIconComponent, ToastBodyComponent, ProgressBarDirective, ProgressComponent, ProgressBarComponent, ButtonDirective]
})
export class Toast02Component {

  position = 'top-end';
  visible = false;
  percentage = 0;

  toggleToast() {
    this.visible = !this.visible;
  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }
}
