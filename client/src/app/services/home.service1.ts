import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';
import { LoginViewModel } from '../model/loginViewModel';

const HOME_API = 'http://localhost:5000/api/Home/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HomeService1 {

  constructor(private http: HttpClient, private storageService : StorageService) { }

  getUserName(): Observable<any> {
    return this.http.get(HOME_API + 'GetUserInfo', httpOptions);
  }
  }


