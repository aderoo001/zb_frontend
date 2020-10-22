import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthInterface} from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;
  private key = '';

  constructor(private httpClient: HttpClient) {
  }

  initAuth(): void {
    if (this.getCookie('ZBAuth')) {
      this.isAuth = true;
    }
  }

  // tslint:disable-next-line:no-shadowed-variable
  login(auth): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    this.httpClient.post<AuthInterface>('http://127.0.0.1:8000/user/login/', JSON.stringify(auth), {headers})
      .subscribe(
        (response) => {
          this.isAuth = true;
          this.key = response.key;
          this.setCookie('ZBAuth', response.key);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  setCookie(name: string, val: string): void {
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name + '=' + value + '; expires=' + date.toUTCString() + '; path=/;'; // secure et httponly
  }

  getCookie(name: string): boolean {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');

    if (parts.length === 2) {
      this.key = parts.pop().split(';').shift();
      return true;
    }
    return false;
  }

  deleteCookie(name: string): void {
    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name + '=; expires=' + date.toUTCString() + '; path=/';
  }
}
