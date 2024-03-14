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
  ThemeDirective,
  TooltipDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-modal08',
  templateUrl: './modal08.component.html',
  standalone: true,
  imports: [
    ButtonDirective,
    ModalToggleDirective,
    ModalComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    ThemeDirective,
    ButtonCloseDirective,
    ModalBodyComponent,
    PopoverDirective,
    RouterLink,
    TooltipDirective,
    ModalFooterComponent
  ]
})
export class Modal08Component {}
