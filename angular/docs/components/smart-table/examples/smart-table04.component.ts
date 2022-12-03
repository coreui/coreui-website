import { Component } from '@angular/core';

import usersData from './data';

@Component({
  selector: 'docs-smart-table04',
  templateUrl: './smart-table04.component.html',
  styleUrls: ['./smart-table04.component.scss']
})
export class SmartTable04Component {

  newData = usersData.map(item => {
    const { id, name, role, status } = { ...item };
    return { id, name, role, status };
  });

  roles = [...new Set(usersData.map(item => item.role))]

  selected: string[] = ['Staff', 'Admin'];

  columns = [
    {
      key: 'name',
      _style: { width: '50%' }
    },
    {
      key: 'role',
      _style: { width: '50%' },
      _props: { color: 'info', class: 'fw-bold' }
    }
  ];

  set columnFilterValue(value) {
    this._columnFilterValue = {...value};
    if (!Object.entries(value).length) {
      this.selected = [];
    }
  }
  get columnFilterValue() {
    return this._columnFilterValue;
  }
  private _columnFilterValue: any = {};

  handleValueChange($event: any) {
    const columnFilterValue = { ...this.columnFilterValue }
    if ($event?.length) {
      const selected = [...$event]
      this.selected = selected;
      const filterFunction = (item: any) => selected.includes(item);
      this.columnFilterValue = { ...columnFilterValue, role: filterFunction }
      return;
    }
    delete columnFilterValue.role;
    this.columnFilterValue = { ...columnFilterValue }
  }

}
