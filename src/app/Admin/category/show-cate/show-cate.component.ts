import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-cate',
  templateUrl: './show-cate.component.html',
  styleUrls: ['./show-cate.component.css']
})
export class ShowCateComponent implements OnInit {

  constructor(private service:SharedService) { }
  CategoryList:any=[];

  ModalTitle:string;
  ActivateAddEditCatComp:boolean=false;
  cate:any;

  ngOnInit(): void {
    this.refreshCateList();
  }
  refreshCateList(){
    this.service.getCateList().subscribe(data=>
      {this.CategoryList=data;});
  }
  addClick(){
    this.cate={
      categoryID:0,
      categoryName:"",
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;

  }

  editClick(item){
    this.service.deleteCategory(item.categoryID)
    this.cate=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteCategory(item.categoryID).subscribe(data=>{
        alert(data.toString());
        this.refreshCateList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCateList();
  }

}
