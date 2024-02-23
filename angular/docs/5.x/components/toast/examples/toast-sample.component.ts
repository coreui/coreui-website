import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';

import { ToastComponent, ToasterService } from '@coreui/angular';
import { ProgressBarComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.component';
import { ProgressComponent } from '../../../../../../../coreui-angular/src/lib/progress/progress.component';
import { ProgressBarDirective } from '../../../../../../../coreui-angular/src/lib/progress/progress-bar.directive';
import { ToastCloseDirective } from '../../../../../../../coreui-angular/src/lib/toast/toast-close.directive';
import { ToastBodyComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-body/toast-body.component';
import { ToastSampleIconComponent } from './toast-sample-icon.component';
import { ToastHeaderComponent } from '../../../../../../../coreui-angular/src/lib/toast/toast-header/toast-header.component';

@Component({
    selector: 'app-toast-sample',
    templateUrl: './toast-sample.component.html',
    styleUrls: ['./toast-sample.component.scss'],
    providers: [{ provide: ToastComponent, useExisting: forwardRef(() => AppToastSampleComponent) }],
    standalone: true,
    imports: [ToastHeaderComponent, ToastSampleIconComponent, ToastBodyComponent, ToastCloseDirective, ProgressBarDirective, ProgressComponent, ProgressBarComponent]
})
export class AppToastSampleComponent extends ToastComponent {

  @Input() closeButton = true;
  @Input() title = '';

  constructor(
    public override hostElement: ElementRef,
    public override renderer: Renderer2,
    public override toasterService: ToasterService,
    public override changeDetectorRef: ChangeDetectorRef
  ) {
    super(hostElement, renderer, toasterService, changeDetectorRef);
  }
}
