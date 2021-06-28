import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  @ViewChild('loginForm')
  loginForm!: NgForm;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.loginForm.valid == !this){

      console.log('Invalid data');
      return;
    }
    console.log(this.loginForm.value);
  }
}
