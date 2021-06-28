import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-ord',
  templateUrl: './add-edit-ord.component.html',
  styleUrls: ['./add-edit-ord.component.css']
})
export class AddEditOrdComponent implements OnInit {

  @Input() ord:any;
  orderID:string;
  customerID:string;
  address:string;
  date:string;
  note:string;
  payStatus:string;
  orderStatus:string;
  staffID:string;
  shipperID:string;
  OrderList:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadOrderList();
  }

  loadOrderList(){
    this.service.getOrdList().subscribe((data:any)=>{
      this.OrderList=data;

      this.orderID=this.ord.orderID;
      this.customerID=this.ord.customerID;
      this.address=this.ord.address;
      this.date=this.ord.date;
      this.note=this.ord.note;
      this.payStatus=this.ord.payStatus;
      this.orderStatus=this.ord.orderStatus;
      this.staffID=this.ord.staffID;
      this.shipperID=this.ord.shipperID;
    });
  }
  addOrder(){
    var val = {orderID:this.orderID,
      customerID:this.customerID,
      address:this.address,
      date:this.date,
      note:this.note,
      payStatus:this.payStatus,
      orderStatus:this.orderStatus,
      staffID:this.staffID,
      shipperID:this.shipperID};

    this.service.addOrder(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateOrder(){
    var val = {orderID:this.orderID,
      customerID:this.customerID,
      address:this.address,
      date:this.date,
      note:this.note,
      payStatus:this.payStatus,
      orderStatus:this.orderStatus,
      staffID:this.staffID,
      shipperID:this.shipperID};

    this.service.updateOrder(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
