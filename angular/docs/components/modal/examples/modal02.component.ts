import { Component, signal } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-modal02',
  templateUrl: './modal02.component.html',
  imports: [
    ButtonDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    ModalFooterComponent
  ]
})
export class Modal02Component {
  readonly visible = signal(false);

  toggleLiveDemo() {
    this.visible.update((value) => !value);
  }
}
