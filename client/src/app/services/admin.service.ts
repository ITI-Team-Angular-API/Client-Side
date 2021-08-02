
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare var apiBaseUrl: string;
@Injectable({
  providedIn: 'root'
})
export class AdminService {   
    constructor(private dataService: DataService) {
    }
    public AddAdmin(admin: Models.IRegisterViewodel) : Observable<any> {
        let url = apiBaseUrl + `api/Account/AddAdmin`;
        return this.dataService.post(url, admin);
    }
}
