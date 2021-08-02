
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare var apiBaseUrl: string;
@Injectable({
  providedIn: 'root'
})
export class HomeService {   
    constructor(private dataService: DataService) {
    }
    public GetUserInfo() : Observable<any> {
        let url = apiBaseUrl + `api/Home/GetUserInfo`;
        return this.dataService.get(url);
    }
    public Search(proName: string) : Observable<any> {
        let url = apiBaseUrl + `api/Home/Search?proName=${encodeURIComponent(proName)}`;
        return this.dataService.get(url);
    }
    public GetProductById(id: number) : Observable<any> {
        let url = apiBaseUrl + `api/Home/GetProductById?id=${id}`;
        return this.dataService.get(url);
    }
}
