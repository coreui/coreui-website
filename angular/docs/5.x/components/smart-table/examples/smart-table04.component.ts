import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

import usersData from './data';
import {
  IColumn,
  IItem,
  MultiSelectComponent,
  MultiSelectOptionComponent,
  SmartTableComponent,
  TemplateIdDirective
} from '@coreui/angular';

interface IData extends IItem {
  id?: number;
  name?: string;
  role?: string;
  status?: string;
}

@Component({
  selector: 'docs-smart-table04',
  templateUrl: './smart-table04.component.html',
  standalone: true,
  imports: [SmartTableComponent, TemplateIdDirective, MultiSelectComponent, NgFor, MultiSelectOptionComponent]
})
export class SmartTable04Component {

  newData: IData[] = usersData.map(item => {
    const { id, name, role, status } = { ...item } as Partial<NonNullable<typeof item>>;
    return { id, name, role, status } as IData;
  });

  roles: string[] = [...new Set(usersData.map(item => item['role']))];

  selected: string[] = ['Staff', 'Admin'];

  columns: IColumn[] = [
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
    this._columnFilterValue = { ...value };
    if (!Object.entries(value).length) {
      this.selected = [];
    }
  }

  get columnFilterValue() {
    return this._columnFilterValue;
  }

  private _columnFilterValue: any = {};

  handleValueChange($event: any) {
    const columnFilterValue = { ...this.columnFilterValue };
    if ($event?.length) {
      const selected = [...$event];
      this.selected = selected;
      const filterFunction = (item: any) => selected.includes(item);
      this.columnFilterValue = { ...columnFilterValue, role: filterFunction };
      return;
    }
    delete columnFilterValue.role;
    this.columnFilterValue = { ...columnFilterValue };
  }

}
