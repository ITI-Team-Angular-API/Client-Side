import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { LoginViewModel } from '../model/loginViewModel';

const AUTH_API = 'http://localhost:5000/api/Account/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storageService : StorageService) { }

  login(credentials:LoginViewModel): Observable<any> {
    this.storageService.removeToken();
    this.storageService.removeRefreshToken();
    return this.http.post(AUTH_API + 'login', {
      username: credentials.UserName,
      password: credentials.Password
    }, httpOptions);
  }

  register(user:any): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      userName: user.userName,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword,
    }, httpOptions);
  }
   logout(): void {
    this.storageService.removeToken();
    this.storageService.removeRefreshToken();
  }
}
