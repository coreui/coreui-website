import { Component } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  OffcanvasBodyComponent,
  OffcanvasComponent,
  OffcanvasHeaderComponent,
  OffcanvasTitleDirective,
  OffcanvasToggleDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-offcanvas03',
  templateUrl: './offcanvas03.component.html',
  imports: [
    ButtonDirective,
    OffcanvasToggleDirective,
    OffcanvasComponent,
    OffcanvasHeaderComponent,
    OffcanvasTitleDirective,
    ButtonCloseDirective,
    OffcanvasBodyComponent
  ]
})
export class Offcanvas03Component {}
