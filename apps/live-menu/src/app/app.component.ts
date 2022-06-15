import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { AuthService } from '@hs-food/auth';

@Component({
  selector: 'hsf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Live Menu';
  users$ = this.api.getUsers();
  login$ = this.auth.login({
    email: 'r.paivabr@gmail.com',
    password: 'changeme'
  });

  constructor(
    private api: ApiService,
    private auth: AuthService,
  ) {}
}
