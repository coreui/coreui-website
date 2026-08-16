import { Component } from '@angular/core';
import {
  AlertComponent,
  ButtonCloseDirective,
  ButtonDirective,
  OffcanvasBodyComponent,
  OffcanvasComponent,
  OffcanvasHeaderComponent,
  OffcanvasTitleDirective,
  OffcanvasToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-offcanvas05',
  templateUrl: './offcanvas05.component.html',
  imports: [
    ButtonDirective,
    OffcanvasToggleDirective,
    AlertComponent,
    OffcanvasComponent,
    OffcanvasHeaderComponent,
    OffcanvasTitleDirective,
    ButtonCloseDirective,
    OffcanvasBodyComponent
  ]
})
export class Offcanvas05Component {}
