import { Component } from '@angular/core';

import { cilList, cilShieldAlt } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'docs-icons01',
  templateUrl: './icons01.component.html',
  standalone: true,
  imports: [IconDirective]
})
export class Icons01Component {
  icons = { cilList, cilShieldAlt };
}
