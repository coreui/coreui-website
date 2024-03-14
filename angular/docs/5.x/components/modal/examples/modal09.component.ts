import { Component } from '@angular/core';
import {
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-modal09',
  templateUrl: './modal09.component.html',
  standalone: true,
  imports: [ButtonDirective, ModalToggleDirective, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ModalBodyComponent]
})
export class Modal09Component {}
