import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  ButtonCloseDirective,
  ButtonDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective,
  ModalToggleDirective,
  PopoverDirective,
  TooltipDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-modal08',
  templateUrl: './modal08.component.html',
  imports: [
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    PopoverDirective,
    RouterLink,
    TooltipDirective,
    ModalFooterComponent
  ]
})
export class Modal08Component {}
