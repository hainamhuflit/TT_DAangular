import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit {

  constructor(private service:SharedService) { }
  NewsList:any=[];

  ModalTitle:string;
  ActivateAddEditNewComp:boolean=false;
  new:any;
  ngOnInit(): void {
    this.refreshNewList();
  }

  refreshNewList(){
    this.service.getNewList().subscribe(data=>{
      this.NewsList=data;
    });
  }
  addClick(){
    this.new={
      newsID:0,
      title:"",
      subcontent:"",
    }
    this.ModalTitle="Add News";
    this.ActivateAddEditNewComp=true;

  }

  editClick(item){
    this.service.deleteNews(item.newsID)
    this.new=item;
    this.ModalTitle="Edit News";
    this.ActivateAddEditNewComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteNews(item.newsID).subscribe(data=>{
        alert(data.toString());
        this.refreshNewList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditNewComp=false;
    this.refreshNewList();
  }
}
