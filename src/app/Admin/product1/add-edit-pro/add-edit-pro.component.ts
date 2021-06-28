import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-pro',
  templateUrl: './add-edit-pro.component.html',
  styleUrls: ['./add-edit-pro.component.css']
})
export class AddEditProComponent implements OnInit {

  @Input() pro:any;
  productID:string;
  productName:string;
  description:string;
  wholesalePrice:string;
  retailPrice:string;
  quantity:string;
  image:string;
  categoriesID:string;
  reviews:string;
  supplierID:string;
  imagepath:string;
  ProductList:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadProductList();
  }
  loadProductList(){
    this.service.getProList().subscribe((data:any)=>{
      this.ProductList=data;

      this.productID=this.pro.productID;
      this.productName=this.pro.productName;
      this.description=this.pro.description;
      this.wholesalePrice=this.pro.wholesalePrice;
      this.retailPrice=this.pro.retailPrice;
      this.quantity=this.pro.quantity;
      this.image=this.pro.image;
      this.imagepath=this.service.PhotoUrl+this.image;
      this.categoriesID=this.pro.categoriesID;
      this.reviews=this.pro.reviews;
      this.supplierID=this.pro.supplierID;
    });
  }
  addProduct(){
    var val = {productID:this.productID,
      productName:this.productName,
      description:this.description,
      wholesalePrice:this.wholesalePrice,
      retailPrice:this.retailPrice,
      quantity:this.quantity,
      image:this.image,
      categoriesID:this.categoriesID,
      reviews:this.reviews,
      supplierID:this.supplierID};

    this.service.addProduct(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateProduct(){
    var val = {productID:this.productID,
      productName:this.productName,
      description:this.description,
      wholesalePrice:this.wholesalePrice,
      retailPrice:this.retailPrice,
      quantity:this.quantity,
      image:this.image,
      categoriesID:this.categoriesID,
      reviews:this.reviews,
      supplierID:this.supplierID};

    this.service.updateProduct(val).subscribe(res=>{
    alert(res.toString());
    });
  }


  uploadPhoto(event){
    var file=event.target.files[0];
    const formData:FormData=new FormData();
    formData.append('uploadedFile',file,file.name);

    this.service.UploadPhoto(formData).subscribe((data:any)=>{
      this.image=data.toString();
      this.imagepath=this.service.PhotoUrl+this.image;
    })
  }

}
