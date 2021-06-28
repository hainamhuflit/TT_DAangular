import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

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
