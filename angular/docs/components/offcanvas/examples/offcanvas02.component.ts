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
  selector: 'docs-offcanvas02',
  templateUrl: './offcanvas02.component.html',
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
export class Offcanvas02Component {}
