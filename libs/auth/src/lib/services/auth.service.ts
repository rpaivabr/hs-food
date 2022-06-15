import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface ILogin {
  email: string;
  password: string;
}

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  login(data: ILogin): Observable<unknown> {
    return this.http.post('http://localhost:3333/api/auth/login', data);
  }
}
