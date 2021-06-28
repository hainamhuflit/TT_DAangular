import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-detail',
  templateUrl: './add-edit-detail.component.html',
  styleUrls: ['./add-edit-detail.component.css']
})
export class AddEditDetailComponent implements OnInit {
  
  @Input() detail:any;
  newsDetailID:string;
  newsID:string;
  title:string;
  contents:string;
  namePoster:string;
  createDate:string;
  image:string;
  NewsDetailList:any=[];

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadNewsDetailList();
  }

  loadNewsDetailList(){
    this.service.getNewsDetailList().subscribe((data:any)=>{
      this.NewsDetailList=data;

      this.newsDetailID=this.detail.newsDetailID;
      this.newsID=this.detail.newsID;
      this.title=this.detail.title;
      this.contents=this.detail.contents;
      this.namePoster=this.detail.namePoster;
      this.createDate=this.detail.createDate;
      this.image=this.detail.image;
    });
  }
  addNewsDetail(){
    var val = {newsDetailID:this.newsDetailID,
      newsID:this.newsID,
      title:this.title,
      contents:this.contents,
      namePoster:this.namePoster,
      createDate:this.createDate,
      image:this.image};

    this.service.addNewsDetail(val).subscribe(res=>{
      alert(res.toString());
    });
    //console.log(this.newsDetailID);
   // console.log(this.createDate);
    //console.log(this.image);
    //console.log(this.newsID);
    //console.log(this.contents);
    //console.log(this.namePoster);
    //console.log(this.title);
  }

  updateNewsDetail(){
    var val = {newsDetailID:this.newsDetailID,
      newsID:this.newsID,
      title:this.title,
      contents:this.contents,
      namePoster:this.namePoster,
      createDate:this.createDate,
      image:this.image};

    this.service.updateNewsDetail(val).subscribe(res=>{
    alert(res.toString());
    });
    //console.log(this.namePoster);
  }
}
