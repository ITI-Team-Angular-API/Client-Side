import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/admin/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
  
  constructor() { }
   Products:Product[]=[];
  ngOnInit(): void {

  }

}
