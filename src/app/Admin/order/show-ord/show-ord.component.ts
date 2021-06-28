import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-ord',
  templateUrl: './show-ord.component.html',
  styleUrls: ['./show-ord.component.css']
})
export class ShowOrdComponent implements OnInit {

  OrderList:any=[];

  ModalTitle:string;
  ActivateAddEditOrdComp:boolean=false;
  ord:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshOrdList();
  }

  refreshOrdList(){
    this.service.getOrdList().subscribe(data=>{
      this.OrderList=data;
    });
  }
  addClick(){
    this.ord={
      orderID:0,
      customerID:0,
      address:"",
      date:"",
      note:"",
      payStatus:"",
      orderStatus:"",
      staffID:0,
      shipperID:0,
    }
    this.ModalTitle="Add Order";
    this.ActivateAddEditOrdComp=true;

  }

  editClick(item){
    this.service.deleteOrder(item.orderID)
    this.ord=item;
    this.ModalTitle="Edit Order";
    this.ActivateAddEditOrdComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteOrder(item.orderID).subscribe(data=>{
        alert(data.toString());
        this.refreshOrdList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditOrdComp=false;
    this.refreshOrdList();
  }
}
