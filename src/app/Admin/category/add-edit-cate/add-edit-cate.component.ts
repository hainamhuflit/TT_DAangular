import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-cate',
  templateUrl: './add-edit-cate.component.html',
  styleUrls: ['./add-edit-cate.component.css']
})
export class AddEditCateComponent implements OnInit {

  @Input() cate:any;
  categoryID:string;
  categoryName:string;
  CategoryList:any=[];
  
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadCategoryList();
  }
  loadCategoryList(){
    this.service.getCateList().subscribe((data:any)=>{
      this.CategoryList=data;

      this.categoryID=this.cate.categoryID;
      this.categoryName=this.cate.categoryName;
    });
  }
  addCategory(){
    var val = {categoryID:this.categoryID,
      categoryName:this.categoryName};

    this.service.addCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategory(){
    var val = {categoryID:this.categoryID,
      categoryName:this.categoryName};

    this.service.updateCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
