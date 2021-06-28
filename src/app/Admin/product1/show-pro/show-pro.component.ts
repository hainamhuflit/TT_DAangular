import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-pro',
  templateUrl: './show-pro.component.html',
  styleUrls: ['./show-pro.component.css']
})
export class ShowProComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList:any=[];

  ModalTitle:string;
  ActivateAddEditProComp:boolean=false;
  pro:any;

  ngOnInit(): void {
    this.refreshProList();
  }
  refreshProList(){
    this.service.getProList().subscribe(data=>{
      this.ProductList=data;
    });
  }
  addClick(){
    this.pro={
      productID:0,
      productName:"",
      description:"",
      wholesalePrice:"",
      retailPrice:"",
      quantity:"",
      image:"",
      categoriesID:1,
      reviews:"",
      supplierID:1,
    }
    this.ModalTitle="Add Product";
    this.ActivateAddEditProComp=true;

  }

  editClick(item){
    this.service.deleteProduct(item.productID)
    this.pro=item;
    this.ModalTitle="Edit Product";
    this.ActivateAddEditProComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteProduct(item.productID).subscribe(data=>{
        alert(data.toString());
        this.refreshProList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditProComp=false;
    this.refreshProList();
  }

}
