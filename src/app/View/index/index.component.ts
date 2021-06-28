import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor(private service:SharedService) { }

  totaLength:any;
  page:number = 1;
  NewsDetailList:any=[];
  ProductList:any=[];


  ngOnInit(): void {
    this.refreshProList();
    this.refreshNewsDetailList();
  }
  refreshProList(){
    this.service.getProList().subscribe(data=>{
      this.ProductList=data;

      this.totaLength = data.length;
      //console.log(this.ProductList)
    });
  }
  refreshNewsDetailList(){
    this.service.getNewsDetailList().subscribe(data=>{
      this.NewsDetailList=data;
    });
  }

  customOptions: any = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    navText: ['', ''],
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      768: {
        items: 3
      },
      992: {
        items: 3
      }
    }
  }

}
