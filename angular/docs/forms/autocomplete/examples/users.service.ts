import { Injectable, Signal } from '@angular/core';
import { HttpParams, httpResource } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersUrl = 'https://apitest.coreui.io/demos/users';

  getUsers(userName: Signal<string | undefined>) {
    const apiParams: IApiParams = {
      limit: 1000,
      offset: 0,
      sort: 'first_name'
    };

    const httpParams: HttpParams = new HttpParams({ fromObject: { ...apiParams } });

    return httpResource<IUsersResponse>(() => ({
      url: `${this.usersUrl}?first_name=${userName() || undefined}`,
      params: httpParams
    }));
  }
}

export interface IUsersResponse {
  number_of_records: number;
  number_of_matching_records: number;
  records: IUser[];
}

export interface IUser {
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
