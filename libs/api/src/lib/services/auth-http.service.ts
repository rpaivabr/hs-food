import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRequest, AuthResponse, IAuth } from '../api.interface';

@Injectable()
export class AuthHttpService implements IAuth {

  constructor(private http: HttpClient) { }

  login(data: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:3000/api/auth/login', data);
  }

}
