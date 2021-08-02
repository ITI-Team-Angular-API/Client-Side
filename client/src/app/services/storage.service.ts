import { Injectable } from '@angular/core';
const ACCESS_TOKEN = 'access_token';
const REFRESH_TOKEN = 'refresh_token';

const USER_INFO = 'user_info';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  getToken(): string|null {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  getRefreshToken(): string| null {
    return localStorage.getItem(REFRESH_TOKEN);
  }

  getUserInfo(): string| null {
    return localStorage.getItem(USER_INFO);
  }

  saveToken(token:string): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken:string): void {
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
  }
  
  saveUserInfo(userInfo:string): void {
    localStorage.setItem(USER_INFO, userInfo);
  }
 
  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(REFRESH_TOKEN);
  }
  
  removeUserInfo(): void {
    localStorage.removeItem(USER_INFO);
  }
  
  
}
