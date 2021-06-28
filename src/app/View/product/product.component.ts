import { Component, OnInit, ViewChild } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


export interface IHeaders {
  
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  constructor(private service:SharedService) { }
  totaLength:any;
  page:number = 1;

  private _searchText: string;
  get searchText(): string{
    return this._searchText;
  }
  set searchText(value: string)
  {
    this._searchText = value;

  }

FilterProduct: any=[];
  
ProductList:any=[];


  ngOnInit(): void {
    this.refreshProList();
  }
  refreshProList(){
    this.service.getProList().subscribe(data=>{
      this.ProductList=data;

      this.totaLength = data.length;
      console.log(this.ProductList)
    });
  }
  _addItemToCart( idp,ido,quanti,price): void {
    let payload  = {
      productID: idp,
      orderID: ido ,
      quanti,
      price

    };
    this.service.addToCart(payload ).subscribe(() => {
      this.refreshProList();
      alert('Product Added');
    });
  }


}
