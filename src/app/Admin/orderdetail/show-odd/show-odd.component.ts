import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-odd',
  templateUrl: './show-odd.component.html',
  styleUrls: ['./show-odd.component.css']
})
export class ShowOddComponent implements OnInit {

  constructor(private service:SharedService) { }
  OrderDetailList:any=[];

  ModalTitle:string;
  ActivateAddEditOddComp:boolean=false;
  odd:any;

  ngOnInit(): void {
    this.refreshOddList();
  }
  refreshOddList(){
    this.service.getOddList().subscribe(data=>{
      this.OrderDetailList=data;
    });
  }
  addClick(){
    this.odd={
      orderddID:0,
      orderID:0,
      productID:0,
      quantity:0,
      price:0,
      
    }
    this.ModalTitle="Add Order Detail";
    this.ActivateAddEditOddComp=true;

  }

  editClick(item){
    this.service.updateOrderDetail(item.orderddID)
    this.odd=item;
    this.ModalTitle="Edit Order Detail";
    this.ActivateAddEditOddComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteOrderDetail(item.orderddID).subscribe(data=>{
        alert(data.toString());
        this.refreshOddList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditOddComp=false;
    this.refreshOddList();
  }

}
