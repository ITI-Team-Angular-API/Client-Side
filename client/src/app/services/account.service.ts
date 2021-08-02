
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';

import { IRegisterViewodel } from 'src/app/models/IRegistraterViewModel'
import { ILoginViewModel } from 'src/app/models/ILoginViewModel'


import { map } from 'rxjs/operators';
declare var apiBaseUrl: string;
@Injectable({
  providedIn: 'root'
})
export class AccountService {
    constructor(private dataService: DataService) {
    }
    public testAction() : Observable<any> {
        let url = apiBaseUrl + `api/Account/testAction`;
        return this.dataService.get(url);
    }

    public register(user: IRegisterViewodel) : Observable<any> {
        let url = apiBaseUrl + `api/Account/register`;
        return this.dataService.post(url, user);
    }
    public Login(user: ILoginViewModel) : Observable<any> {
        let url = apiBaseUrl + `api/Account/Login`;
        return this.dataService.post(url, user);
    }
}
