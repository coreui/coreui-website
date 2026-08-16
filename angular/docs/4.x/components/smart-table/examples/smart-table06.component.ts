import { Component } from '@angular/core';

import usersData from './data-nested';

interface IAddress {
  country?: string,
  city?: string
}

interface IUser {
  id: number,
  name: string,
  address: IAddress,
  city: IAddress['city']
}

@Component({
  selector: 'docs-smart-table06',
  templateUrl: './smart-table06.component.html'
})
export class SmartTable06Component {

  usersData: IUser[] = usersData.map((item) => {
    return { ...item, city: item.address.city };
  });

  filteredUsersData = this.usersData;

  columns = [
    {
      key: 'name',
      _style: { width: '40%' }
    },
    {
      key: 'address',
      _props: { color: 'info', class: 'fw-bold' },
      filter: (item: IUser, value: string) => item.address?.country?.toLowerCase().startsWith(value.toLowerCase().trim()),
      sorter: (itemA: IUser, itemB: IUser) => {
        const a = (itemA.address?.country?.toLowerCase().trim() ?? '') + itemA.address?.city?.toLowerCase().trim() ?? '';
        const b = (itemB.address?.country?.toLowerCase().trim() ?? '') + itemB.address?.city?.toLowerCase().trim() ?? '';
        return a > b ? 1 : b > a ? -1 : 0;
      }
    },
    {
      key: 'city'
    }
  ];
}
