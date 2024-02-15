import { Component } from '@angular/core';
import { endOfDay, startOfDay } from 'date-fns';
import { IColumn, IItem } from '@coreui/angular';

import usersData from './data';
import { extend } from 'lodash-es';

interface IData extends IItem {
  id?: number;
  name?: string;
  registered?: string
}

@Component({
  selector: 'docs-smart-table05',
  templateUrl: './smart-table05.component.html'
})
export class SmartTable05Component {

  newData: IData[] = usersData.map((item) => {
    const { id, name, registered } = { ...item } as Partial<NonNullable<typeof item>>
    return { id, name, registered } as IData;
  });

  columns: IColumn[] = [
    {
      key: 'name',
      _style: { width: '50%' }
    },
    {
      key: 'registered',
      _style: { width: '50%' },
      _props: { color: 'info', class: 'fw-bold' }
    }
  ];

  calendarDate: Date = new Date(2022, 0, 1);

  set startDate(value) {
    this._startDate = value;
    if (this._endDate) {
      this.handleDateRangeChange();
    }
  }

  get startDate() {
    return this._startDate;
  }

  private _startDate: Date | null = new Date(2022, 0, 1);

  set endDate(value) {
    this._endDate = value;
    this.handleDateRangeChange();
  }

  get endDate() {
    return this._endDate;
  }

  private _endDate: Date | null = new Date(2022, 0, 10);

  set columnFilterValue(value) {
    this._columnFilterValue = { ...value };
    // if (!Object.entries(value).length) {
    //   this.startDate = null;
    // }
  }

  get columnFilterValue() {
    return this._columnFilterValue;
  }

  private _columnFilterValue: any = {};

  handleDateRangeChange() {

    const columnFilterValue = { ...this.columnFilterValue };

    if (this._startDate && this._endDate) {

      const fromDate = startOfDay(this._startDate);
      const toDate = endOfDay(this._endDate);

      const filterFunction = (item: any) => {
        const date = new Date(item);
        return date >= fromDate && date <= toDate;
      };

      this.columnFilterValue = { ...columnFilterValue, registered: filterFunction };
      return;
    }

    delete columnFilterValue.registered;
    this.columnFilterValue = { ...columnFilterValue };
  }
}
