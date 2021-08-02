import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  List: any;
  router: any;
  activatedRoute: any;
  
  constructor(private service:CategoryService) { }

  CategoriesList:any=[];

  ModalTitle:string="";
  ActivateAddEditCatComp:boolean=false;
  cat:any;

  IdFilter:string="";
  NameFilter:string="";
  CategoryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCatList();
  }

  addClick(){
    this.cat={
      Id:0,
      Name:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;

  }

  editClick(item: any){
    this.cat=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;
  }

  deleteClick(item: { Id: any; }){
    if(confirm('Are you sure??')){
      this.service.deleteCategory(item.Id).subscribe(data=>{
        alert(data.toString());
        this.refreshCatList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCatList();
  }


  refreshCatList(){
    this.service.getCatList().subscribe(data=>{
      this.CategoriesList=data;
      this.CategoryListWithoutFilter=data;
    });
  }

  showProducts()
  {
    this.router.navigate(["category.Id"],{relativeTo:this.activatedRoute});
  }

  FilterFn(){
    var IdFilter = this.IdFilter;
    var NameFilter = this.NameFilter;

    this.List = this.CategoryListWithoutFilter.filter(function (el: { Id: { toString: () => string; }; Name: { toString: () => string; }; }){
        return el.Id.toString().toLowerCase().includes(
          IdFilter.toString().trim().toLowerCase()
        )&&
        el.Name.toString().toLowerCase().includes(
          NameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop: string | number,asc: any){
    this.CategoriesList = this.CategoryListWithoutFilter.sort(function(a: { [x: string]: number; },b: { [x: string]: number; }){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}