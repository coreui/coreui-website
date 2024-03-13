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
  selector: 'docs-offcanvas06',
  templateUrl: './offcanvas06.component.html',
  standalone: true,
  imports: [ButtonDirective, OffcanvasToggleDirective, ThemeDirective, OffcanvasComponent, OffcanvasHeaderComponent, OffcanvasTitleDirective, ButtonCloseDirective, OffcanvasBodyComponent]
})
export class Offcanvas06Component {}
