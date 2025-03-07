import { Component } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import {CookieComponent} from './cookie/cookie.component';
import {MatToolbar} from '@angular/material/toolbar';
import {MatSidenav, MatSidenavContainer} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatIcon} from '@angular/material/icon';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbar, MatSidenavContainer, MatNavList, MatSidenav, MatListItem, MatIcon, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angelo';
  date = new Date();
  cours :string[]=[];
  constructor(private auth: AuthService, private http: HttpClient, private router: Router) {
    this.loadCours()
  }
  authenticated() { return this.auth.authenticated; }
  logout(){this.auth.logout();}
  private loadCours(): void {
    this.http.get<string[]>('http://localhost:8080/cours')}


}
