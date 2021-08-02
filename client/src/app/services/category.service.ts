import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
declare var apiBaseUrl: string;
@Injectable({
  providedIn: 'root'
})
export class CategoryService {  
    readonly APIUrl="http://localhost:5000/";

    constructor(private dataService: DataService,private http:HttpClient) {
    }
    getCatList():Observable<any[]>{
        return this.http.get<any>(this.APIUrl+'api/Category/ShowAllCategories');
      }
    
      addCategory(val:any){
        return this.http.post(this.APIUrl+'/Category',val);
      }
    
      updateCategory(val:any){
        return this.http.put(this.APIUrl+'/Category',val);
      }
    
      deleteCategory(val:any){
        return this.http.delete(this.APIUrl+'/Category/'+val);
      }

}
