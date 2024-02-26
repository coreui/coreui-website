import { Component } from '@angular/core';

import usersData from './data';
import { IColumn, IItem } from '@coreui/angular';
import { BadgeComponent } from '../../../../../../../coreui-angular/src/lib/badge/badge.component';
import { NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { AlignDirective } from '../../../../../../../coreui-angular/src/lib/utilities/align.directive';
import { TableColorDirective } from '../../../../../../../coreui-angular/src/lib/table/table-color.directive';
import { TableActiveDirective } from '../../../../../../../coreui-angular/src/lib/table/table-active.directive';
import { CardFooterComponent } from '../../../../../../../coreui-angular/src/lib/card/card-footer.component';
import { CardBodyComponent } from '../../../../../../../coreui-angular/src/lib/card/card-body.component';
import { CardComponent } from '../../../../../../../coreui-angular/src/lib/card/card.component';
import { TextColorDirective } from '../../../../../../../coreui-angular/src/lib/utilities/text-color.directive';
import { CollapseDirective } from '../../../../../../../coreui-angular/src/lib/collapse/collapse.directive';
import { ButtonDirective } from '../../../../../../../coreui-angular/src/lib/button/button.directive';
import { ColDirective } from '../../../../../../../coreui-angular/src/lib/grid/col.directive';
import { TemplateIdDirective } from '../../../../../../../coreui-angular/src/lib/shared/template-id.directive';
import { SmartTableComponent } from '../../../../../../../coreui-angular/src/lib/smart-table/smart-table/smart-table.component';

@Component({
    selector: 'docs-smart-table01',
    templateUrl: './smart-table01.component.html',
    styleUrls: ['./smart-table01.component.scss'],
    standalone: true,
    imports: [SmartTableComponent, TemplateIdDirective, ColDirective, ButtonDirective, CollapseDirective, TextColorDirective, CardComponent, CardBodyComponent, CardFooterComponent, TableActiveDirective, TableColorDirective, AlignDirective, NgClass, NgSwitch, NgSwitchCase, BadgeComponent, NgSwitchDefault]
})
export class SmartTable01Component {

  usersData: IItem[] = usersData;

  columns: (IColumn | string)[] = [
    {
      key: 'name',
      _style: { width: '40%' },
      _props: { color: 'danger', class: 'fw-bold' },
    },
    'registered',
    { key: 'role', filter: false, sorter: false, _style: { width: '15%' }, _classes: 'text-muted small' },
    { key: 'status', _style: { width: '15%' } },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false,
    },
  ]

  getBadge(status: string) {
    switch (status) {
      case 'Active':
        return 'success'
      case 'Inactive':
        return 'secondary'
      case 'Pending':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }

  getItem(item: any) {
    return Object.keys(item);
  }

  details_visible = Object.create({});

  toggleDetails(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }
}
