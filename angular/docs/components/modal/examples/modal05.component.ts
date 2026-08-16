import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-modal05',
  templateUrl: './modal05.component.html',
  imports: [
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    NgTemplateOutlet,
    ModalFooterComponent
  ]
})
export class Modal05Component {}
