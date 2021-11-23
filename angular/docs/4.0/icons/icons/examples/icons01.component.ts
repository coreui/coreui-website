import { Component } from '@angular/core';

import { cilList, cilShieldAlt } from '@coreui/icons';

@Component({
  selector: 'docs-icons01',
  templateUrl: './icons01.component.html'
})
export class Icons01Component {
  icons = { cilList, cilShieldAlt };
}
