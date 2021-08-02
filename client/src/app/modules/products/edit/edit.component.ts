import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {


  constructor(private service:ProductService) { }
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
  }
  updateProduct(){
    var val = {Name:this.Name,
      Details:this.Details,
      Price:this.Price,
      Image:this.Image,
      Quantity:this.Quantity,
      CategoryId:this.CategoryId,
      PhotoFileName:this.PhotoFileName};

    this.service.updateProduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  uploadPhoto(event: any){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.PhotoFileName=data.toString();
      this.PhotoFilePath=this.service.Image_Url+this.PhotoFileName;
    })
  }
}
