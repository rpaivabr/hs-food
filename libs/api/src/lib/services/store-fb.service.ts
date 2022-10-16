import { Injectable } from '@angular/core';
import { from, map, Observable } from 'rxjs';
import { IStore, Profile } from '../api.interface';
import {
  collection,
  collectionData,
  CollectionReference,
  doc,
  Firestore,
  query,
  setDoc,
  deleteDoc,
  where,
} from '@angular/fire/firestore';

@Injectable()
export class StoreFbService implements IStore {

  constructor(private firestore: Firestore) {}

  getData<T>(collectionName: string): Observable<T[]> {
    return collectionData<T>(
      query<T>(
        collection(this.firestore, collectionName) as CollectionReference<T>,
      ),
      { idField: 'id' }
    );
  }

  saveData(collectionName: string, data: any): Observable<void> {
    const id = doc(collection(this.firestore, 'id')).id;
    return from(setDoc(doc(this.firestore, `${collectionName}/${id}`), data));
  }

  updateData(collectionName: string, data: any): Observable<void> {
    return from(
      setDoc(doc(this.firestore, `${collectionName}/${data.id}`), data)
    );
  }

  removeData(collectionName: string, data: any): Observable<void> {
    return from(
      deleteDoc(doc(this.firestore, `${collectionName}/${data.id}`))
    );
  }

  getCurrentUser(uid: string): Observable<Profile> {
    return collectionData<Profile>(
      query<Profile>(
        collection(this.firestore, 'users') as CollectionReference<Profile>,
        where('uid', '==', uid)
      ),
      { idField: 'id' }
    ).pipe(map((users: Profile[]): Profile => users[0]));
  }
}
