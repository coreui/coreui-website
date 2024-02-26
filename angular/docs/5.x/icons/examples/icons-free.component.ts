import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';

import { freeSet } from '@coreui/icons';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { ColComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'docs-icons-free',
  templateUrl: './icons-free.component.html',
  styleUrls: ['./icons-free.component.scss'],
  providers: [IconSetService],
  standalone: true,
  imports: [
    RowComponent,
    NgFor,
    ColComponent,
    IconDirective
  ]
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
