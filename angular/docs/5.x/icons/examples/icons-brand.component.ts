import { Component, OnInit } from '@angular/core';

import { brandSet } from '@coreui/icons';
import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { ColComponent, RowComponent } from '@coreui/angular';
import { NgFor } from '@angular/common';

@Component({
  selector: 'docs-icons-brand',
  templateUrl: './icons-free.component.html',
  styleUrls: ['./icons-free.component.scss'],
  providers: [IconSetService],
  standalone: true,
  imports: [RowComponent, NgFor, ColComponent, IconDirective]
})
export class IconsBrandComponent implements OnInit {

  public title = 'CoreUI Icons';
  public icons: any;

  constructor(
    private iconSet: IconSetService
  ) {
    iconSet.icons = brandSet;
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
