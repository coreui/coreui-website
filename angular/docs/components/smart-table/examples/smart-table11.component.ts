import { Component, ChangeDetectionStrategy } from '@angular/core';

import { IColumn, SmartTableComponent } from '@coreui/angular';
import usersData from './data';

@Component({
  selector: 'docs-smart-table11',
  templateUrl: './smart-table11.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [SmartTableComponent]
})
export class SmartTable11Component {
  usersData = usersData;

  readonly columns: IColumn[] = [
    {
      group: 'main_group',
      label: 'Main Group',
      _style: { backgroundColor: 'var(--cui-secondary)' },
      _props: { color: 'secondary', class: 'text-center text-light' },
      children: [
        {
          group: 'subgroup_1',
          label: 'Subgroup 1',
          _style: { backgroundColor: 'var(--cui-light)' },
          _props: { class: 'text-center text-dark' },
          children: [
            {
              key: 'name',
              label: 'Long and overflowing header label caption',
              _style: { minWidth: '5rem', maxWidth: '16rem', width: '16rem' },
              _props: { class: 'text-truncate' }
            },
            {
              key: 'registered',
              _style: { width: '5rem', maxWidth: '10rem', minWidth: '10rem' },
              _props: { class: 'text-truncate' }
            }
          ]
        },
        {
          group: 'subgroup_2',
          label: 'Subgroup 2',
          _style: {
            backgroundColor: 'var(--cui-secondary-bg)',
            width: '35%'
          },
          _props: {
            class: 'text-center'
          },
          children: [
            {
              key: 'role'
            },
            {
              key: 'status'
            }
          ]
        }
      ]
    }
  ];
}
