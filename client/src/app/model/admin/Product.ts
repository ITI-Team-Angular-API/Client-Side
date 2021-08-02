export class Product {

    public Id : number;
    public Name : string;
    public Details:string;
    public Price:number;
    public Image:string;
    public ImageUrl:string;

    public Quantity :number;
    public CategoryId:string|null;
    constructor(id:number, name : string, details:string,price:number,image:string,quantity :number,categoryId :string|null,ImageUrl:string ){
        this.Id = id;
        this.Name=name;
        this.Details=details;
        this.Price=price;
        this.Image=image;
        this.Quantity=quantity
        this.CategoryId = categoryId;
        this.ImageUrl=ImageUrl
    }

}
