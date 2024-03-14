import { Component } from '@angular/core';
import { ButtonCloseDirective, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-close-button03',
  templateUrl: './close-button03.component.html',
  styleUrls: ['./close-button03.component.scss'],
  standalone: true,
  imports: [ThemeDirective, ButtonCloseDirective]
})
export class CloseButton03Component {}
