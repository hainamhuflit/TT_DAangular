import { Component, Input, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-rol',
  templateUrl: './add-edit-rol.component.html',
  styleUrls: ['./add-edit-rol.component.css']
})
export class AddEditRolComponent implements OnInit {

  @Input() rol:any;
  roleID:string;
  roleName:string;
  roleType:string;
  
  RoleList:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadRoleList();
  }
  loadRoleList(){
    this.service.getCusList().subscribe((data:any)=>{
      this.RoleList=data;

      this.roleID=this.rol.roleID;
      this.roleName=this.rol.roleName;
      this.roleType=this.rol.roleType;
      
      
    });
  }
  addRole(){
    var val = {roleID:this.roleID,
      roleName:this.roleName,
      roleType:this.roleType,
      
      };

    this.service.addRole(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateRole(){
    var val = {roleID:this.roleID,
      roleName:this.roleName,
      roleType:this.roleType,
      
      };

    this.service.updateRole(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
