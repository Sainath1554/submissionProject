import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  constructor(
    private logOutService: LogoutService,
    private router: Router,
    private loginService: LoginService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.emitLogStatus.subscribe((bool) => {
      console.log(bool);
      this.loggedIn = bool;
    });
  }

  logOut() {
    console.log('clicked this');
    this.logOutService.onLogOut().subscribe((bool) => {
      this.router.navigate(['/login']);
    });
  }
}
