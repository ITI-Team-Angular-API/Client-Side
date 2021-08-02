import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IProductViewModel } from '../models/IProductViewModel';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/admin/Product';

declare var apiBaseUrl: string;
@Injectable({
  providedIn: 'root'
})export class ProductService {
readonly APIUrl="http://localhost:5000/";
readonly Image_Url = "http://localhost:5000/Content/Resources/images/";
ProdCategory:string = "https://localhost:5000/api/Category/";

  constructor(private dataService: DataService,private http:HttpClient) {
  }

  public () : Observable<any> {
      let url = apiBaseUrl + `api/Product/api/Product/`;
      return this.dataService.post(url, {});
  }
  public ShowAllProducts() : Observable<any> {
      let url = apiBaseUrl + `api/Product/ShowAllProducts`;
      return this.dataService.get(url);
  }
  public CreateProduct(productViewModel: any) : Observable<any> {
      let url = apiBaseUrl + `api/Product/CreateProduct`;
      return this.dataService.post(url, productViewModel);
  }
  public downloadImage(id: any) : Observable<any> {
      let url = apiBaseUrl + `api/Product/downloadImage?id=${id}`;
      return this.dataService.get(url);
  }
  public EditProduct(id: any, productViewModel: any) : Observable<any> {
      let url = apiBaseUrl + `api/Product/EditProduct?id=${id}`;
      return this.dataService.post(url, id);
  }
  public DeleteProduct(id: any) : Observable<any> {
      let url = apiBaseUrl + `api/Product/DeleteProduct?id=${id}`;
      return this.dataService.post(url, id);
  }

  getProdList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'api/Product/ShowAllProducts');
  }

  addProduct(val:any){
    return this.http.post(this.APIUrl+'/Product',val);
  }

  updateProduct(val:any){
    return this.http.put(this.APIUrl+'/Product',val);
  }

  deleteProduct(val:any){
    return this.http.delete(this.APIUrl+'/Product/'+val);
  }
  
  getProdCategory(catId:number):Observable<Product[]>
  {
    return this.http.get<Product[]>(`${this.ProdCategory}${catId}`);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Product/SaveFile',val);
  }

}
