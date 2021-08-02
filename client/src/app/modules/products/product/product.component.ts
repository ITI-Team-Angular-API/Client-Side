import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductService';
import { Product } from 'src/app/model/admin/Product';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserInfo } from 'src/app/model/userInfo';
import { IProductViewModel } from 'src/app/models/IProductViewModel';
import { StorageService } from 'src/app/services/storage.service';
declare var apiBaseUrl: string;
declare var   usrString:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  quantity = 1;
  config: any;
  thumbnail: any;
  sanitizer: any;
   Id: any;
   prodserv: any;
   totalLength: any;
   errorMsg: any;

  //   constructor(private service:ProductService, private router:Router , private routActive:ActivatedRoute) { }

  //    productsList:Product[] = [];
  //  img:string = "../../../../assets/Content/Resources/images";
   ModalTitle:string="";
   ActivateAddEditComp:boolean=false;
   prod:any;
  public userInfo :UserInfo = {} as UserInfo;
  public isAdmin : boolean = false;
  public ProductList:IProductViewModel[] = [];
  constructor(private service:ProductService,private storageService: StorageService,private routActive:ActivatedRoute,private router:Router) {
    service.ShowAllProducts().subscribe((productsList: any) => {
      this.ProductList = productsList;
     this.ProductList.forEach((p)=>{
        p.ImageUrl  = apiBaseUrl + `api/Product/downloadImage?id=${p.Id}`;
     });
    });
  }
    ngOnInit(): void {
       usrString = this.storageService.getUserInfo();
      if(usrString != undefined && usrString != null && usrString != '')
      {
         this.userInfo = JSON.parse(usrString);
         this.isAdmin = this.userInfo.isAdmin;
      }
      this.refreshProdList();

      this.Id = this.routActive.snapshot.paramMap.get("Id");


       }
    addClick(){
      this.prod={
        Id:0,
        Name:"",
        Details: "",
        Price: 0,
        Image:"",
        Quantity: 0,
        CategoryId: 0,
        PhotoFileName:"anonymous.jpg"
      }
      this.ModalTitle="Add Product";
      this.ActivateAddEditComp=true;

    }

    editClick(item: any){
      console.log(item);
      this.prod=item;
      this.ModalTitle="Edit Product";
      this.ActivateAddEditComp=true;
    }

    deleteClick(item: { Id: any; }){
      if(confirm('Are you sure??')){
        this.service.deleteProduct(item.Id).subscribe(data=>{
          alert(data.toString());
          this.refreshProdList();
        })
      }
    }

    closeClick(){
      this.ActivateAddEditComp=false;
      this.refreshProdList();
    }


    refreshProdList(){
      this.service.getProdList().subscribe(data=>{
        this.ProductList=data;
      });
    }

  }





//      this.refreshProdList();

//      this.Id = this.routActive.snapshot.paramMap.get("Id");

//      this.service.getProdCategory(this.Id).subscribe(
//        data => {
//          this.productsList = data;
//          this.totalLength = data.length;
//        },
//        error => {
//          this.errorMsg = error;
//        })
//       }
//    addClick(){
//      this.prod={
//        Id:0,
//        Name:"",
//        Details: "",
//        Price: 0,
//        Image:"",
//        Quantity: 0,
//        CategoryId: 0,
//        PhotoFileName:"anonymous.jpg"
//      }
//      this.ModalTitle="Add Product";
//      this.ActivateAddEditComp=true;

//    }

//    editClick(item: any){
//      console.log(item);
//      this.prod=item;
//      this.ModalTitle="Edit Product";
//      this.ActivateAddEditComp=true;
//    }

//  deleteClick(item: { Id: any; }){
//      if(confirm('Are you sure??')){
//        this.service.deleteProduct(item.Id).subscribe(data=>{
//          alert(data.toString());
//          this.refreshProdList();
//        })
//      }
//    }

// //    closeClick(){
// //      this.ActivateAddEditComp=false;
// //      this.refreshProdList();
// //    }


// //    refreshProdList(){
// //      this.service.getProdList().subscribe(data=>{
// //        this.productsList=data;
// //      });
// //    }

// //  }

 function addClick(): any {
   throw new Error('Function not implemented.');
}

