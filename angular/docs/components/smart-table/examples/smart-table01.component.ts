import { Component } from '@angular/core';

import usersData from './_data';

@Component({
  selector: 'docs-smart-table01',
  templateUrl: './smart-table01.component.html',
  styleUrls: ['./smart-table01.component.scss']
})
export class SmartTable01Component {

  usersData = usersData;

  columns = [
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
