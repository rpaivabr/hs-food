import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../api.interface';
import { StoreFbService } from './store-fb.service'

@Injectable()
export class StoreService {

  constructor(private store: StoreFbService) { }

  getData<T>(collectionName: string): Observable<T[]> {
    return this.store.getData(collectionName);
  }

  saveData(collectionName: string, data: any): Observable<void> {
    return this.store.saveData(collectionName, data);
  }

  updateData(collectionName: string, data: any): Observable<void> {
    return this.store.updateData(collectionName, data);
  }

  removeData(collectionName: string, data: any): Observable<void> {
    return this.store.removeData(collectionName, data);
  }

  getCurrentUser(uid: string): Observable<Profile> {
    return this.store.getCurrentUser(uid);
  }
}
