import { Component } from '@angular/core';
import {
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
  selector: 'docs-offcanvas03',
  templateUrl: './offcanvas03.component.html',
  standalone: true,
  imports: [ButtonDirective, OffcanvasToggleDirective, ThemeDirective, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, ButtonCloseDirective, OffcanvasBodyComponent]
})
export class Offcanvas03Component {}
