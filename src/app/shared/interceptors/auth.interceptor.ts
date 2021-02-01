import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpClient, HttpBackend, HttpEvent } from '@angular/common/http';
import { AuthService } from '../services/api/auth.service';
import { Observable, pipe, throwError } from 'rxjs';
import { catchError, flatMap, switchMap, tap } from 'rxjs/operators';
import { ITokens } from '../interfaces/apiInterfaces';
import { SERVER } from '../constants';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private http: HttpClient;
  constructor(
    private authService: AuthService,
    private handler: HttpBackend,
  ) {
    this.http = new HttpClient(handler);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = this.authService.getAccessToken();
    let newReq = req.clone({
      setHeaders: {
        Authorization: req.headers.get('Authorization') || `Bearer ${token}`
      }
    });
    return next.handle(newReq).pipe(
        catchError((err) => {
          if (err.status === 401) {
            return this.http
              .get<ITokens>(`${SERVER}/auth/refreshTokens`, { headers: { 'Authorization': `Bearer ${this.authService.getRefreshToken()}` } })
              .pipe(
                switchMap(tokens => {
                  if (tokens) {
                    this.authService.setTokens(tokens);
                    this.authService.setIsAuthorized();
                    req = req.clone({
                      setHeaders: {
                        Authorization: `Bearer ${tokens.access_token}`
                      }
                    });
                    return next.handle(req);
                  }
                }),
                catchError((err) => {
                  if (err.status === 401) {
                    this.authService.logout({ reLogin: true });
                  }
                  return throwError(err);
                })
              );
          }
        })
      );
  }
}
