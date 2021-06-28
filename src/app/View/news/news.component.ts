import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  new:any=[];
  quantity:string;
  NewsDetailList:any=[];
  constructor(private service:SharedService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.refreshNewsDetailList();
  }

  refreshNewsDetailList(){
    this.service.getNewsDetailList().subscribe(data=>{
      this.NewsDetailList=data;
    });
  }
}
