import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.css']
})
export class RegisFormComponent implements OnInit {


  customerID:string;
  userName:string;
  password:string;
  email:string;
  address:string;
  phone:string;
  roleID:string;
  CustomerList:any=[];
  cus:any;
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadCustomerList()
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
  //resetForm(form? : NgForm)
  //{
  //  if(form != null)
  //  form.reset();
  //  this.cus = {
  //    customerID: '0',
  //    userName: '',
 //     email:'',
 //     password:'',
 //     address:'',
 //     phone:'',
 //     roleID:'1'
 //   }
 // }
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

}
