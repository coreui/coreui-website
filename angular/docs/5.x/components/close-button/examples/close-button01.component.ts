import { Component } from '@angular/core';
import { ButtonCloseDirective, ThemeDirective } from '@coreui/angular';

@Component({
  selector: 'docs-close-button01',
  templateUrl: './close-button01.component.html',
  styleUrls: ['./close-button01.component.scss'],
  standalone: true,
  imports: [ThemeDirective, ButtonCloseDirective]
})
export class CloseButton01Component {}
