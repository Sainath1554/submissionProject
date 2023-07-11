import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  private logOutEvent = new EventEmitter<boolean>();

  constructor(private aService: AuthService) {}

  onLogOut() {
    this.aService.logout();
    return of(this.aService.isLoggedIn);
  }
}
