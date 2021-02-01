import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
  ) { }

  getUser(): Observable<any> {
    return this.http.get<any>(`${SERVER}/users`);
  }

  getMyProfile(): any {
    return this.http.get<any>(`${SERVER}/users/my-profile`);
  }
}
