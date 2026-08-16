import { Component, inject } from '@angular/core';

import { freeSet } from '@coreui/icons';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-icons-free',
  templateUrl: './icons-free.component.html',
  providers: [IconSetService],
  imports: [RowComponent, ColComponent, IconDirective]
})
export class IconsFreeComponent {
  readonly iconSet = inject(IconSetService);

  public title = 'CoreUI Icons';
  public icons: any;

  constructor() {
    this.iconSet.icons = freeSet;
    this.icons = Object.entries(this.iconSet.icons);
  }

  toKebabCase(str: string) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }

  getIconsView(prefix: string) {
    return Object.entries(this.iconSet.icons);
  }
}
