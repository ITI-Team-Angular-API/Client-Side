
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare var apiBaseUrl: string;
@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {   
    constructor(private dataService: DataService) {
    }
    public ViewCart() : Observable<any> {
        let url = apiBaseUrl + `api/ShoppingCart/ViewCart`;
        return this.dataService.get(url);
    }
    public RemoveProduct(ShopCartProductId: number, price: number, quantity: number) : Observable<any> {
        let url = apiBaseUrl + `api/ShoppingCart/RemoveProduct?ShopCartProductId=${ShopCartProductId}&price=${price}&quantity=${quantity}`;
        return this.dataService.post(url, ShopCartProductId);
    }
}
