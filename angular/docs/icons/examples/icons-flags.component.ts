import { Component, inject } from '@angular/core';

import { flagSet } from '@coreui/icons';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-icons-flags',
  templateUrl: './icons-free.component.html',
  providers: [IconSetService],
  imports: [RowComponent, ColComponent, IconDirective]
})
export class IconsFlagsComponent {
  readonly iconSet = inject(IconSetService);

  public title = 'CoreUI Icons';
  public icons: any;

  constructor() {
    this.iconSet.icons = flagSet;
    this.icons = Object.entries(this.iconSet.icons);
  }

  toKebabCase(str: string) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }

  getIconsView(prefix: string) {
    return Object.entries(this.iconSet.icons);
  }
}
