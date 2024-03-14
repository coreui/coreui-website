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
  selector: 'docs-modal04',
  templateUrl: './modal04.component.html',
  standalone: true,
  imports: [ButtonDirective, ModalToggleDirective, ModalComponent, ModalHeaderComponent, ModalTitleDirective, ThemeDirective, ButtonCloseDirective, ModalBodyComponent, NgTemplateOutlet, ModalFooterComponent]
})
export class Modal04Component {}
