import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-rol',
  templateUrl: './show-rol.component.html',
  styleUrls: ['./show-rol.component.css']
})
export class ShowRolComponent implements OnInit {

  constructor(private service:SharedService) { }
  RoleList:any=[];

  ModalTitle:string;
  ActivateAddEditRolComp:boolean=false;
  rol:any;

  ngOnInit(): void {
    this.refreshRolList();
  }
  refreshRolList(){
    this.service.getRolList().subscribe(data=>{
      this.RoleList=data;
    });
  }
  addClick(){
    this.rol={
      roleID:0,
      roleName:"",
      roleType:"",
      
    }
    this.ModalTitle="Add Role";
    this.ActivateAddEditRolComp=true;

  }

  editClick(item){
    this.service.updateRole(item.roleID)
    this.rol=item;
    this.ModalTitle="Edit Customer";
    this.ActivateAddEditRolComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteRole(item.roleID).subscribe(data=>{
        alert(data.toString());
        this.refreshRolList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditRolComp=false;
    this.refreshRolList();
  }

}
