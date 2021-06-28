import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-new',
  templateUrl: './add-edit-new.component.html',
  styleUrls: ['./add-edit-new.component.css']
})
export class AddEditNewComponent implements OnInit {
  
  @Input() new:any;
  newsID:string;
  title:string;
  subcontent:string;
  NewsList:any=[];
  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.loadNewsList();
  }
  loadNewsList(){
    this.service.getNewList().subscribe((data:any)=>{
      this.NewsList=data;

      this.newsID=this.new.newsID;
      this.title=this.new.title;
      this.subcontent=this.new.subcontent;
    });
  }
  addNews(){
    var val = {newsID:this.newsID,
      title:this.title,
      subcontent:this.subcontent};


    this.service.addNews(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateNews(){
    var val = {newsID:this.newsID,
      title:this.title,
      subcontent:this.subcontent};

    this.service.updateNews(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
