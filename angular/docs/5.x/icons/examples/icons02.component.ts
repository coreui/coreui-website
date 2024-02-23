import { Component } from '@angular/core';

import { cilShieldAlt, cilList } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';

@Component({
    selector: 'docs-icons02',
    templateUrl: './icons02.component.html',
    standalone: true,
    imports: [IconDirective],
})
export class Icons02Component  {

  icons = { cilShieldAlt, cilList } ;

}
