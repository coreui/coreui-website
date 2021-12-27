import { ChangeDetectorRef, Component, ElementRef, forwardRef, Input, Renderer2 } from '@angular/core';

import { ToastComponent, ToasterService } from '@coreui/angular';

@Component({
  selector: 'app-toast-sample',
  templateUrl: './toast-sample.component.html',
  styleUrls: ['./toast-sample.component.scss'],
  providers: [{ provide: ToastComponent, useExisting: forwardRef(() => AppToastSampleComponent) }]
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
