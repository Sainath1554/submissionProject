import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  emitLogStatus = new EventEmitter<boolean>();
  login() {
    this.isLoggedIn = true;
    this.emitLogStatus.emit(true);
  }

  logout() {
    this.isLoggedIn = false;
    this.emitLogStatus.emit(false);
  }
}
