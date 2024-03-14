import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, retry, takeUntil, tap } from 'rxjs/operators';

import {
  AlertComponent,
  IColumn,
  IColumnFilterValue,
  ISorterValue,
  SmartPaginationComponent,
  SmartTableComponent
} from '@coreui/angular';
import { IApiParams, IUsers, UsersService } from './users.service';

export interface IParams {
  activePage?: number;
  columnFilterValue?: IColumnFilterValue;
  itemsPerPage?: number;
  loadingData?: boolean;
  sorterValue?: ISorterValue;
  totalPages?: number;
}

@Component({
  selector: 'docs-smart-table03',
  templateUrl: './smart-table03.component.html',
  providers: [UsersService],
  standalone: true,
  imports: [NgIf, SmartTableComponent, SmartPaginationComponent, AlertComponent, AsyncPipe]
})
export class SmartTable03Component implements OnInit, OnDestroy {

  constructor(
    private usersService: UsersService
  ) {
  }

  title = 'CoreUI Angular Smart Table Example';
  readonly columns: (string | IColumn)[] = [
    {
      key: 'first_name',
      _style: { width: '15%' }
    },
    {
      key: 'last_name',
      _style: { width: '15%' }
    },
    'email',
    {
      key: 'country',
      _style: { width: '22%' }
    },
    {
      key: 'ip_address',
      label: 'IP',
      _style: { width: '15%' }
    }
  ];
  readonly activePage$ = new BehaviorSubject(0);
  readonly columnFilterValue$ = new BehaviorSubject({});
  readonly itemsPerPage$ = new BehaviorSubject(5);
  readonly loadingData$ = new BehaviorSubject<boolean>(true);
  readonly totalPages$ = new BehaviorSubject<number>(1);
  readonly sorterValue$ = new BehaviorSubject({});
  readonly totalItems$ = new BehaviorSubject(0);

  readonly apiParams$ = new BehaviorSubject<IApiParams>({ limit: this.itemsPerPage$.value, offset: 0 });
  readonly errorMessage$ = new Subject<string>();
  readonly retry$ = new Subject<boolean>();

  readonly props$: Observable<IParams> = combineLatest([
    this.activePage$,
    this.columnFilterValue$,
    this.itemsPerPage$,
    this.loadingData$,
    this.sorterValue$,
    this.totalPages$
  ]).pipe(
    debounceTime(100),
    map(([activePage, columnFilterValue, itemsPerPage, loadingData, sorterValue, totalPages]) => ({
      activePage,
      columnFilterValue,
      itemsPerPage,
      loadingData,
      sorterValue,
      totalPages
    }))
  );
  usersData$!: Observable<IUsers[] | unknown>;
  readonly #destroy$ = new Subject<boolean>();

  private _apiParams: IApiParams = {};

  set apiParams(value: any) {
    const params = {
      ...this._apiParams,
      ...value
    };

    const entries = new Map(Object.entries(params));
    entries.forEach((value, key, map) => {
      if (value === '' || value === undefined || value === null) {
        map.delete(key);
      }
    });

    const apiParams = Object.fromEntries(entries);
    this.loadingData$.next(true);
    this._apiParams = { ...apiParams };
    this.retry$.next(true);
    this.apiParams$.next({ ...apiParams });
  }

  ngOnDestroy(): void {
    this.#destroy$.next(true);
  }

  ngOnInit(): void {

    this.activePage$.pipe(
      takeUntil(this.#destroy$)
    ).subscribe((page) => {
      const limit = this.itemsPerPage$.value;
      const offset = limit * page - limit;
      this.apiParams = { offset, limit };
    });

    this.itemsPerPage$.pipe(
      distinctUntilChanged(),
      takeUntil(this.#destroy$)
    ).subscribe((limit) => {
      const totalPages = Math.ceil(this.totalItems$.value / limit) ?? 1;
      this.totalPages$.next(totalPages);
    });

    this.totalItems$.pipe(
      distinctUntilChanged(),
      takeUntil(this.#destroy$)
    ).subscribe((totalItems) => {
      const totalPages = Math.ceil(totalItems / this.itemsPerPage$.value) ?? 1;
      this.totalPages$.next(totalPages);
    });

    this.totalPages$.pipe(
      takeUntil(this.#destroy$)
    ).subscribe((totalPages) => {
      const activePage = this.activePage$.value > totalPages ? totalPages : this.activePage$.value;
      this.setActivePage(activePage);
    });

    this.usersData$ = this.usersService.getUsers(this.apiParams$).pipe(
      retry({
        delay: (error) => {
          console.warn('Retry: ', error);
          this.errorMessage$.next(error.message ?? `Error: ${JSON.stringify(error)}`);
          this.loadingData$.next(false);
          return this.retry$;
        }
      }),
      tap((response) => {
        this.totalItems$.next(response.number_of_matching_records);
        if (response.number_of_records) {
          this.errorMessage$.next('');
        }
        this.retry$.next(false);
        this.loadingData$.next(false);
      }),
      map((response) => {
        return response.records;
      })
    );
  }

  handleColumnFilterValueChange(columnFilterValue: IColumnFilterValue) {
    this.setActivePage(1);
    this.apiParams = { ...columnFilterValue };
    this.columnFilterValue$.next(columnFilterValue);
  }

  handleSorterValueChange(sorterValue: ISorterValue) {
    this.sorterValue$.next(!!sorterValue.state ? sorterValue : {});
    const sort = !!sorterValue.state ? `${sorterValue.column}%${sorterValue.state}` : '';
    this.apiParams = { sort };
  }

  handleFilteredItemsChange(filteredItems: IUsers[]) {
    // console.table(filteredItems);
  }

  handleActivePageChange(page: number) {
    this.setActivePage(page);
  }

  handleItemsPerPageChange(limit: number) {
    this.itemsPerPage$.next(limit);
  }

  setActivePage(page: number) {
    page = page > 0 && this.totalPages$.value + 1 > page ? page : 1;
    this.activePage$.next(page);
  }
}
