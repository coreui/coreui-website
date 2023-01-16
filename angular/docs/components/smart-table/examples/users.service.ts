import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, debounceTime, distinctUntilChanged, retry, switchMap } from 'rxjs/operators';

const httpOptions = {
  // headers: new HttpHeaders({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': '*',
  //   Connection: 'keep-alive'
  // })
};

export interface IData {
  number_of_records: number;
  number_of_matching_records: number;
  records: IUsers[];
}

export interface IUsers {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  ip_address: string;
  registered: string;
}

export interface IApiParams {
  offset?: number;
  limit?: number;
  columnFilter?: string;
  columnSorter?: string;
  sort?: string;
}

@Injectable()
export class UsersService {
  constructor(
    private httpClient: HttpClient
  ) {
  }

  usersUrl = 'https://apitest.coreui.io/demos/users';

  /** GET users from the server */
  getUsers(config$: BehaviorSubject<IApiParams>): Observable<any> {
    return config$.pipe(
      debounceTime(100),
      distinctUntilChanged(
        (previous, current) => {
          return JSON.stringify(previous) === JSON.stringify(current);
        }
      ),
      switchMap((config) => this.fetchData(config))
    );
  }

  private fetchData(params: IApiParams): Observable<IData> {
    const apiParams = {
      ...params
    };
    const httpParams: HttpParams = new HttpParams({ fromObject: apiParams });

    const options = Object.keys(httpParams).length
                    ? { params: httpParams, ...httpOptions }
                    : { params: {}, ...httpOptions };

    return this.httpClient
      .get<IData>(this.usersUrl, options)
      .pipe(
        retry({ count: 1, delay: 1000, resetOnSuccess: true }),
        catchError(this.handleHttpError)
      );
  }

  private handleHttpError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
