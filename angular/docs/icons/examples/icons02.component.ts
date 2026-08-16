import { Component } from '@angular/core';

import { freeSet } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-icons02',
  templateUrl: './icons02.component.html',
  imports: [IconDirective]
})
export class Icons02Component {
  icons = freeSet;
}
