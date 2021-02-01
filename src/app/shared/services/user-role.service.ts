import { Injectable } from '@angular/core';
import { AuthService } from './api/auth.service';

@Injectable()
export class UserRoleService {

  constructor(
    private authService: AuthService,
  ) { }


}
