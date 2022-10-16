import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest, AuthResponse } from '../api.interface';
import { AuthFbService } from './auth-fb.service';

@Injectable()
export class AuthService {

  constructor(private auth: AuthFbService) { }

  login(data: AuthRequest): Observable<AuthResponse> {
    return this.auth.login(data);
  }

  // login(data: ILogin): Observable<unknown> {
  //   return this.http.post('http://localhost:3333/api/auth/login', data);
  // }
}
