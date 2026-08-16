import { Component } from '@angular/core';
import { ButtonCloseDirective } from '@coreui/angular';

@Component({
  selector: 'docs-close-button03',
  templateUrl: './close-button03.component.html',
  imports: [ButtonCloseDirective],
  host: { class: 'bg-dark p-4 rounded-top-2 d-block', 'data-coreui-theme': 'dark' }
})
export class CloseButton03Component {}
