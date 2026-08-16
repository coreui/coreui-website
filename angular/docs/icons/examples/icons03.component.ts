import { Component, inject } from '@angular/core';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { cilListNumbered, cilPaperPlane } from '@coreui/icons';

@Component({
  selector: 'docs-icons03',
  templateUrl: './icons03.component.html',
  imports: [IconDirective],
  providers: [IconSetService]
})
export class Icons03Component {
  readonly iconSet = inject(IconSetService);
  constructor() {
    this.iconSet.icons = {
      cilListNumbered,
      cilPaperPlane
    };
  }
}
