import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/model/userInfo';
import{IProductViewModel}from 'src/app/models/IProductViewModel'
import { ProductService } from 'src/app/services/ProductService';
import { StorageService } from 'src/app/services/storage.service';

declare var apiBaseUrl: string;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public userInfo :UserInfo = {} as UserInfo;
  public isAdmin : boolean = false;
   ProductList:IProductViewModel[] = [];
  constructor(private service:ProductService,private storageService: StorageService) {
    service.ShowAllProducts().subscribe((productsList: any) => {
      this.ProductList = productsList;
     this.ProductList.forEach((p)=>{
        p.ImageUrl  = apiBaseUrl + `api/Product/downloadImage?id=${p.Id}`;
     });
    });
  }
  ModalTitle:string="";
  ActivateAddEditComp:boolean=false;

  @Input() prod:any;
  Id: number=0;
  Name: string="";
  Details: string="";
  Price: number=0;
  Image: string="";
  Quantity: number=0;
  CategoryId: number=0;
  PhotoFileName: string="";
  PhotoFilePath: string="";

  CategoriesList:any=[];

  ngOnInit(): void {
   var usrString = this.storageService.getUserInfo();
   if(usrString != undefined && usrString != null && usrString != '')
   {
      this.userInfo = JSON.parse(usrString);
      this.isAdmin = this.userInfo.isAdmin;
   }
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

  deleteClick(item:{ Id: any; }){
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
