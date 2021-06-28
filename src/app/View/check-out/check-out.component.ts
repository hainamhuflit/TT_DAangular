import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

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
}
