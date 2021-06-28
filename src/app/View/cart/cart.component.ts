import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  constructor(private service:SharedService) { }
  carts:any=[];
  cartTotal = 0;
  cartDetails;
  ngOnInit(): void {
    this.getCart();
  }
  getCart(): void {
    this.service.getCartItems().subscribe(data => {
      this.carts = data;
      this.carts.forEach(data => {
        this.cartTotal +=(data.quanti*data.retailPrice)
      });
      // this.cartDetails = data.data;
      console.log(this.carts);
    });
  }
  _increamentQTY(idp,ido, quanti,price): void {
    let payload  = {
      productID: idp,
      orderID: ido ,
      quanti,
      price

    };
    this.service.addToCart(payload ).subscribe(() => {
      this.getCart();
      alert('Product Added');
    });
  }
  
  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deletecard(item.orderddID).subscribe(data=>{
        alert(data.toString());
        this.getCart();
      })
    }
  }

}