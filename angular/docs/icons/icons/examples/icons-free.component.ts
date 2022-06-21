import { Component, OnInit } from '@angular/core';

import { freeSet } from '@coreui/icons';
import { IconSetService } from '@coreui/icons-angular';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'docs-icons-free',
  templateUrl: './icons-free.component.html',
  styleUrls: ['./icons-free.component.scss'],
  providers: [IconSetService],
})
export class IconsFreeComponent implements OnInit {

  public title = 'CoreUI Icons';
  public icons: any;

  constructor(
    private iconSet: IconSetService
  ) {
    iconSet.icons = freeSet;
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
