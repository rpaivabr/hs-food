import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { AuthRequest, AuthResponse, IAuth } from '../api.interface';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';

@Injectable()
export class AuthFbService implements IAuth {
  constructor(private auth: Auth) {}

  login(data: AuthRequest): Observable<AuthResponse> {
    console.log(data);
    return from(signInWithEmailAndPassword(this.auth, data.email, data.password)).pipe(
      map((res: UserCredential): AuthResponse => {
        return { accessToken: res.user.uid };
      })
    );
  }

}
