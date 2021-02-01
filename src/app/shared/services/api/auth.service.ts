import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { ITokens } from '../../interfaces/apiInterfaces';
import { SERVER } from '../../constants';
import { LocalStorageService } from '../local-storage.service';
import { UsersService } from './users.service';
import { catchError, share, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthorized: boolean;
  public isAdmin: boolean;

  constructor(
    private http: HttpClient,
    private localStorage: LocalStorageService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.setIsAuthorized();
  }

  login(loginData: { username: string, password: string }): Observable<any> {
    return this.http.post<ITokens>(`${SERVER}/auth/login`, loginData).pipe(
      catchError(err => {
        this.openSnackBar('Неправильное имя пользователя или пароль!', 'ЗАКРЫТЬ');
        return throwError(err);
      }),
      switchMap(tokens => {
      if (tokens) {
        this.setTokens(tokens);
        this.setIsAuthorized();
        return this.getProfile();
      }
      })
    );
  }

  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  setTokens(tokens: ITokens): void {
    this.localStorage.set('access_token', tokens.access_token);
    this.localStorage.set('refresh_token', tokens.refresh_token);
  }

  setIsAuthorized(): void {
    try {
      const user: any = atob(this.getAccessToken().split('.')[1]);
      this.isAdmin = JSON.parse(user).role === 'admin';
      this.isAuthorized = true;
    } catch (err) {
      console.log(err);
      this.isAdmin = false;
      this.isAuthorized = false;
    }
  }

  getProfile(): any {
    return this.http.get<any>(`${SERVER}/auth/profile`);
  }

  getAccessToken(): string {
    return localStorage.getItem('access_token');
  }

  getRefreshToken(): string {
    return localStorage.getItem('refresh_token');
  }

  logout(options?: { reLogin: boolean }): void {
    this.localStorage.remove('access_token');
    this.localStorage.remove('refresh_token');
    this.setIsAuthorized();
    this.router.navigate([ options?.reLogin? '/login':  '/']);
  }
}
