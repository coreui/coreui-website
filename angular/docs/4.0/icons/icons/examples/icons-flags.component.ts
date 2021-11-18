import { Component, OnInit } from '@angular/core';

import { flagSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';

@Component({
  selector: 'docs-icons-flags',
  templateUrl: './icons-free.component.html',
  styleUrls: ['./icons-free.component.scss'],
  providers: [IconSetService]
})
export class IconsFlagsComponent implements OnInit {

  public title = 'CoreUI Icons';
  public icons: any;

  constructor(
    private iconSet: IconSetService
  ) {
    iconSet.icons = flagSet;
  }

  ngOnInit() {
    this.icons = Object.entries(this.iconSet.icons);
  }

  toKebabCase(str: string) {
    return str.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
  }

  getIconsView(prefix: string) {
    return Object.entries(this.iconSet.icons);
  }
}
