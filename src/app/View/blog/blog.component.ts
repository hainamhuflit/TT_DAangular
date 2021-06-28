import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  new:any=[];
  quantity:string;
  NewsDetailList:any=[];
  constructor(private service:SharedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadproduct();
    this.refreshNewsDetailList();
  }

  loadproduct(){
    const newsDetailID = this.route.snapshot.paramMap.get('id');
    this.service.getBynewID(newsDetailID)
    .subscribe((data:any) => {
      this.new = data;
      });
  }
  refreshNewsDetailList(){
    this.service.getNewsDetailList().subscribe(data=>{
      this.NewsDetailList=data;
    });
  }
}
