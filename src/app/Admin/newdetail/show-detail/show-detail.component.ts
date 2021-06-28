import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  constructor(private service:SharedService) { }
  NewsDetailList:any=[];

  ModalTitle:string;
  ActivateAddEditDetailComp:boolean=false;
  detail:any;


  ngOnInit(): void {
    this.refreshNewsDetailList();
  }
  refreshNewsDetailList(){
    this.service.getNewsDetailList().subscribe(data=>{
      this.NewsDetailList=data;
    });
  }
  addClick(){
    this.detail={
      newsDetailID:0,
      newsID:1,
      title:"",
      contents:"",
      namePoster:"",
      createDate:"",
      image:"",
    }
    this.ModalTitle="Add NewsDetail";
    this.ActivateAddEditDetailComp=true;

  }

  editClick(item){
    this.service.deleteNewsDetail(item.newsDetailID)
    this.detail=item;
    this.ModalTitle="Edit NewsDetail";
    this.ActivateAddEditDetailComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteNewsDetail(item.newsDetailID).subscribe(data=>{
        alert(data.toString());
        this.refreshNewsDetailList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDetailComp=false;
    this.refreshNewsDetailList();
  }
}
