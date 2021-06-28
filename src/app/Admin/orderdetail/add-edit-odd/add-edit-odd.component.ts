import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-odd',
  templateUrl: './add-edit-odd.component.html',
  styleUrls: ['./add-edit-odd.component.css']
})
export class AddEditOddComponent implements OnInit {

  @Input() odd:any;
  orderddID:string;
  orderID:string;
  productID:string;
  quantity:string;
  price:string;
  
  OrderDetailList:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadOddList();
  }
  loadOddList(){
    this.service.getOddList().subscribe((data:any)=>{
      this.OrderDetailList=data;

      this.orderddID=this.odd.orderddID;
      this.orderID=this.odd.orderID;
      this.productID=this.odd.productID;
      this.quantity=this.odd.quantity;
      this.price=this.odd.price;
      
    });
  }
  addOrderDetail(){
    var val = {orderddID:this.orderddID,
      orderID:this.orderID,
      productID:this.productID,
      quantity:this.quantity,
      price:this.price,
      };

    this.service.addOrderDetail(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateOrderDetail(){
    var val = {orderddID:this.orderddID,
      orderID:this.orderID,
      productID:this.productID,
      quantity:this.quantity,
      price:this.price,
      };

    this.service.updateOrderDetail(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
