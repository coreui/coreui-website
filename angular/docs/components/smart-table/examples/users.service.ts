import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

// let usersUrl: string = '/api/users';
let usersUrl: string = 'https://m8gn8f.sse.codesandbox.io/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};

export interface IData {
  pages: number;
  users: IUsers[];
}

export interface IUsers {
  id: number;
  name: string;
  registered: string;
  role: string;
  status: string;
}

export interface IParams {
  page?: number;
  columnFilterValue?: string;
  tableFilterValue?: string;
  sorterValue?: string;
  itemsPerPage?: number;
}

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  /** GET status from the server */
  getStatus(): Observable<any> {
    return this.httpClient.get<any>(
      'https://m8gn8f.sse.codesandbox.io/api/status',
      httpOptions
    );
  }

  /** GET users from the server */
  getUsers(config: IParams): Observable<IData> {
    const configParams = {
      page: 1,
      columnFilterValue: '',
      tableFilterValue: '',
      sorterValue: '',
      itemsPerPage: 5,
      ...config
    };

    const params = new HttpParams({ fromObject: configParams });
    const options = Object.keys(params).length
      ? { params: params, ...httpOptions }
      : { params: {}, ...httpOptions };

    // console.log('options', options.params);

    return this.httpClient.get<IData>(usersUrl, options);
  }
}
