import { Component } from '@angular/core';
import { ButtonCloseDirective, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-close-button02',
  templateUrl: './close-button02.component.html',
  styleUrls: ['./close-button02.component.scss'],
  standalone: true,
  imports: [ThemeDirective, ButtonCloseDirective]
})
export class CloseButton02Component {}
