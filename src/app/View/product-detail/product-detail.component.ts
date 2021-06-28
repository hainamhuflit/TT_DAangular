import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:any=[];
  quantity:string;
  constructor(private service:SharedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadproduct();
  }
  loadproduct(){
    const productID = this.route.snapshot.paramMap.get('id');
    this.service.getByID(productID)
    .subscribe((data:any) => {
      this.product = data;
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
      this.loadproduct();
      alert('Product Added');
    });
  }
}
