import { Observable } from "rxjs";

export interface IAuth {
  login(data: AuthRequest): Observable<AuthResponse>;
}

export interface IStore {
  getData<T>(collectionName: string): Observable<T[]>;
  saveData(collectionName: string, data: any): Observable<void>;
  updateData(collectionName: string, data: any): Observable<void>;
  removeData(collectionName: string, data: any): Observable<void>;
}

export type AuthRequest = {
  email: string;
  password: string;
}

export type AuthResponse = {
  accessToken: string;
}

export type Profile = {
  id: string;
  email: string;
  fullname: string;
  roles: string;
  uid?: string;
}
