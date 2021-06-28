import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cus',
  templateUrl: './show-cus.component.html',
  styleUrls: ['./show-cus.component.css']
})
export class ShowCusComponent implements OnInit {

  constructor(private service:SharedService) { }
  CustomerList:any=[];

  ModalTitle:string;
  ActivateAddEditCusComp:boolean=false;
  cus:any;

  ngOnInit(): void {
    this.refreshCusList();
  }
  refreshCusList(){
    this.service.getCusList().subscribe(data=>{
      this.CustomerList=data;
    });
  }
  addClick(){
    this.cus={
      customerID:0,
      userName:"",
      password:"",
      email:"",
      address:"",
      phone:"",
      roleID:0,
    }
    this.ModalTitle="Add Customer";
    this.ActivateAddEditCusComp=true;

  }

  editClick(item){
    this.service.updateCustomer(item.customerID)
    this.cus=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditCusComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCustomer(item.customerID).subscribe(data=>{
        alert(data.toString());
        this.refreshCusList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCusComp=false;
    this.refreshCusList();
  }

}
