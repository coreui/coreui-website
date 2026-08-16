import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgClass } from '@angular/common';

import {
  AlignDirective,
  IColumn,
  IItem,
  SmartTableComponent,
  TableActiveDirective,
  TableColorDirective,
  TemplateIdDirective
} from '@coreui/angular';

import { IUser, UserService } from './user.service';
import { delay, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'docs-smart-table09',
  templateUrl: './smart-table09.component.html',
  styles: ['.no-wrap {white-space: nowrap}'],
  providers: [UserService],
  imports: [
    AlignDirective,
    AsyncPipe,
    NgClass,
    SmartTableComponent,
    TemplateIdDirective,
    TableActiveDirective,
    TableColorDirective
  ],
  changeDetection: ChangeDetectionStrategy.Eager
})
export class SmartTable09Component {
  title = 'CoreUI-Angular Smart Table Example';

  readonly columns: (string | IColumn)[] = [
    {
      key: 'user',
      label: 'User',
      _style: { minWidth: '10rem', maxWidth: '15rem', width: '10rem' },
      _props: { class: 'text-truncate' },
      filter: (item: IItem, value: string) => {
        return (
          item['first_name']?.toLowerCase().startsWith(value) ||
          item['last_name']?.toLowerCase().startsWith(value) ||
          item['age'] === parseInt(value)
        );
      },
      sorter: (itemA, itemB): number => {
        const a = parseInt(itemA['age'] ?? 0);
        const b = parseInt(itemB['age'] ?? 0);
        return a > b ? 1 : b > a ? -1 : 0;
      }
    },
    {
      key: 'country',
      _style: { width: '5rem', maxWidth: '10rem', minWidth: '10rem' },
      _props: { class: 'text-truncate' }
    },
    {
      key: 'email',
      filter: false,
      sorter: false
    }
  ];

  activePage = 1;
  itemsPerPage = 5;
  loadingData = signal(true);

  private userService = inject(UserService);

  users$: Observable<IUser[]> = this.userService.getUsers().pipe(
    delay(1000),
    tap(() => {
      this.loadingData.set(false);
    })
  );
}
