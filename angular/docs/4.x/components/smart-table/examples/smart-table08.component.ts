import { Component } from '@angular/core';
import { IColumn, IItem } from '@coreui/angular';

import { cilBadge, cilCalendar, cilGroup, cilUser } from '@coreui/icons';
import usersData from './data';

interface IData extends IItem {
  id?: number;
  name?: string;
  role?: string;
  status?: string;
  registered?: string;
  _data?: { tooltip: string, icon: string };
}

@Component({
  selector: 'docs-smart-table08',
  templateUrl: './smart-table08.component.html'
})
export class SmartTable08Component {

  icons = { cilBadge, cilCalendar, cilGroup, cilUser };

  newData: IData[] = usersData.map(item => {
    const { id, name, role, status, registered } = { ...item } as Partial<NonNullable<typeof item>>;
    return { id, name, role, status, registered } as IData;
  });

  columns: IColumn[] = [
    {
      key: 'name',
      label: 'Name',
      _style: { width: '30%' },
      _labelTemplateId: 'all',
      _data: { tooltip: 'User Name', icon: 'cilUser' }
    },
    {
      key: 'role',
      label: 'Role',
      _style: { width: '20%' },
      _labelTemplateId: 'all',
      _data: { tooltip: 'User Role', icon: 'cilGroup' }
    },
    {
      key: 'status',
      label: 'Status',
      _style: { width: '25%' },
      _labelTemplateId: 'all',
      _data: { tooltip: 'User Status', icon: 'cilBadge' }
    },
    {
      key: 'registered',
      label: 'Registered',
      _style: { width: '25%' },
      _data: { tooltip: 'Date Registered', icon: 'cilCalendar' }
    }
  ];

}
