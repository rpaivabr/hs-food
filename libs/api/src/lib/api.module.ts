import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthFbService } from './services/auth-fb.service';
import { AuthService } from './services/auth.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { StoreService } from './services/store.service';
import { StoreFbService } from './services/store-fb.service';

const firebase = {
  apiKey: "AIzaSyBJ_8phyncI8pWRYTH9SpacalzR-pBkQis",
  authDomain: "hs-food-tcc.firebaseapp.com",
  projectId: "hs-food-tcc",
  storageBucket: "hs-food-tcc.appspot.com",
  messagingSenderId: "523837581337",
  appId: "1:523837581337:web:f8935f6268af319fe8e288"
};

@NgModule({
  imports: [
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [AuthService, AuthFbService, StoreService, StoreFbService],
})
export class ApiModule {}
