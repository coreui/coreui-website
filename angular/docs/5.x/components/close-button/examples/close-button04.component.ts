import { Component } from '@angular/core';
import { ButtonCloseDirective, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-close-button04',
  templateUrl: './close-button04.component.html',
  styleUrls: ['./close-button04.component.scss'],
  standalone: true,
  imports: [ThemeDirective, ButtonCloseDirective]
})
export class CloseButton04Component {}
