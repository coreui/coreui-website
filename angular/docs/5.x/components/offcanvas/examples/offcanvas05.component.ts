import { Component } from '@angular/core';
import {
  AlertComponent,
  ButtonCloseDirective,
  ButtonDirective,
  OffcanvasBodyComponent,
  OffcanvasComponent,
  OffcanvasHeaderComponent,
  OffcanvasTitleDirective,
  OffcanvasToggleDirective,
  ThemeDirective
} from '@coreui/angular';

@Component({
  selector: 'docs-offcanvas05',
  templateUrl: './offcanvas05.component.html',
  standalone: true,
  imports: [ButtonDirective, OffcanvasToggleDirective, AlertComponent, ThemeDirective, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, ButtonCloseDirective, OffcanvasBodyComponent]
})
export class Offcanvas05Component {}
