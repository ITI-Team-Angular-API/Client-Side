
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare var apiBaseUrl: string;
@Injectable({
  providedIn: 'root'
})
export class OrderService {
    constructor(private dataService: DataService) {
    }
    public Checkout(visa: IVisaViewModel, PaymentMethod: string) : Observable<any> {
        let url = apiBaseUrl + `api/Order/Checkout?PaymentMethod=${encodeURIComponent(PaymentMethod)}`;
        return this.dataService.post(url, visa);
    }
}
