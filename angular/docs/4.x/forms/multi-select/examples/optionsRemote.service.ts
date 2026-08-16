import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, Observable, retry, Subject, switchMap, tap, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

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
  id: string;
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
export class OptionsRemoteService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  private readonly usersUrl = 'https://apitest.coreui.io/demos/users';

  /** GET options from the server */
  search(name$: Subject<string>): Observable<IUsers[]> {
    return name$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((name) => {
        const params = { last_name: name, offset: 0, limit: 15000, sort: 'id%asc' };
        return this.fetchData(params);
      })
    );
  }

  private fetchData(params: IApiParams): Observable<IUsers[]> {
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
        catchError(this.handleHttpError),
        tap(response => {
          console.log('httpClient', response);
        }),
        map(response => response.records)
      );
  }

  private handleHttpError(error: HttpErrorResponse) {
    return throwError(() => error);
  }
}
