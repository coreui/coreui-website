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
  ModalToggleDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-modal05',
  templateUrl: './modal05.component.html',
  standalone: true,
  imports: [ButtonDirective, ModalToggleDirective, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, ButtonCloseDirective, ModalBodyComponent, NgTemplateOutlet, ModalFooterComponent]
})
export class Modal05Component {}
