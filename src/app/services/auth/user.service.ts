import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username = '';
  private email = '';
  private password = '';

  constructor() {
  }

  public setPseudoAndPassword(username, password): void {
    this.username = username;
    this.password = password;
  }

  public setEmailAndPassword(email, password): void {
    this.email = email;
    this.password = password;
  }
}
