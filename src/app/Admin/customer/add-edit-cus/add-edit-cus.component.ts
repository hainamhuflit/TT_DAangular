import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cus',
  templateUrl: './add-edit-cus.component.html',
  styleUrls: ['./add-edit-cus.component.css']
})
export class AddEditCusComponent implements OnInit {

  @Input() cus:any;
  customerID:string;
  userName:string;
  password:string;
  email:string;
  address:string;
  phone:string;
  roleID:string;
  CustomerList:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadCustomerList();
  }
  loadCustomerList(){
    this.service.getCusList().subscribe((data:any)=>{
      this.CustomerList=data;

      this.customerID=this.cus.customerID;
      this.userName=this.cus.userName;
      this.password=this.cus.password;
      this.email=this.cus.email;
      this.address=this.cus.address;
      this.phone=this.cus.phone;
      this.roleID=this.cus.roleID;
      
    });
  }
  addCustomer(){
    var val = {customerID:this.customerID,
      userName:this.userName,
      password:this.password,
      email:this.email,
      address:this.address,
      
      phone:this.phone,
      roleID:this.roleID
      };

    this.service.addCustomer(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCustomer(){
    var val = {customerID:this.customerID,
      userName:this.userName,
      password:this.password,
      email:this.email,
      address:this.address,
      
      phone:this.phone,
      roleID:this.roleID
      };

    this.service.updateCustomer(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
