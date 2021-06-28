import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-bcd',
  templateUrl: './bcd.component.html',
  styleUrls: ['./bcd.component.css']
})
export class BcdComponent implements OnInit {

  constructor(private service:SharedService) { }

  ProductList:any=[];
  ngOnInit(): void {
    
    this.refreshProList();
    //this._getProducts();
  }
  refreshProList(){
    this.service.getProList().subscribe(data=>{
      this.ProductList=data;
    });
  }
  //_getProducts(): void {
  //  this.http.getAllProducts().subscribe((data: any) => {
  //    this.products = data.data;
  //    console.log(this.products);
  //  });
  //}
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
