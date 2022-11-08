import { Component, OnInit } from '@angular/core';

import { IUsers, UsersService } from './users.service';

@Component({
  selector: 'docs-smart-table03',
  templateUrl: './smart-table03.component.html',
  providers: [UsersService],
  styles: []
})
export class SmartTable03Component implements OnInit {

  title = 'CoreUI-Angular Smart Table Example';

  usersExternal: IUsers[] = Array.from({ length: 5 });
  usersFallback = Array.from({ length: 5 });

  serverStatus = { status: 'DOWN' };

  columns = [
    'id',
    {
      key: 'name',
      _style: { width: '40%' }
    },
    { key: 'registered', filter: false, sorter: false },
    { key: 'role', _style: { width: '20%' } },
    { key: 'status', _style: { width: '15%' } },
    {
      key: 'show',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false
    }
  ];

  params = {
    page: 1,
    columnFilterValue: '',
    tableFilterValue: '',
    sorterValue: '',
    itemsPerPage: 5
  };

  columnFilterValue = [];
  tableFilterValue = '';
  sorterValue = {};
  loadingData = true;
  totalPages = 1;
  activePage = 1;

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.getStatus();
  }

  getStatus() {
    let retry = 0;
    const intervalId = setInterval(() => {
      retry++;
      this.usersService.getStatus().subscribe(
        (next) => {
          console.log('next', next);
          this.serverStatus = { ...next };
        },
        (error) => {
          console.log('error', error);
        },
        () => {
          console.log('complete');
          this.getUsers();
          clearInterval(intervalId);
        }
      );
      if (retry > 10) {
        clearInterval(intervalId);
      }
    }, 2000);
  }

  getUsers(): void {
    this.loadingData = true;
    this.usersService.getUsers({ ...this.params }).subscribe((next) => {
      console.log(next);
      const users = next.users;
      this.usersExternal = [...users];
      this.loadingData = false;
      this.totalPages = next.pages;
      console.log('usersExternal', users);
    });
  }

  handleColumnFilterValueChange($event: any) {
    console.log('handleColumnFilterValueChange', $event);
    this.columnFilterValue = $event;
    this.params.columnFilterValue = JSON.stringify(this.columnFilterValue);
    this.params.page = 1;
    this.getUsers();
  }

  handleTableFilterValueChange($event: any) {
    console.log('handleTableFilterValueChange', $event);
    this.tableFilterValue = $event;
    this.params.tableFilterValue = JSON.stringify(this.tableFilterValue);
    this.getUsers();
  }

  handleSorterValueChange(sorterValue: any) {
    const sorter = Object.keys(sorterValue).length
      ? { ...sorterValue, asc: sorterValue.state === 'asc' }
      : {};
    console.log('handleSorterValueChange', sorter);
    this.params.sorterValue = JSON.stringify(sorter);
    this.getUsers();
  }

  handleFilteredItemsChange($event: any) {
    console.log('handleFilteredItemsChange', $event);
  }

  handleActivePageChange(page: number) {
    console.log('handleActivePageChange', page);
    this.params.page = page;
    this.getUsers();
  }

}
