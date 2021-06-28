import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//-----------------------------
import { AboutComponent } from './View/about/about.component';
import { CartComponent } from './View/cart/cart.component';
import { CheckOutComponent } from './View/check-out/check-out.component';
import { ContactComponent } from './View/contact/contact.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { IndexComponent } from './View/index/index.component';
import { NewsComponent } from './View/news/news.component';
import { ProductComponent } from './View/product/product.component';
import { ProductDetailComponent } from './View/product-detail/product-detail.component';
//---------------------------------------product Admin
import { Product1Component } from './Admin/product1/product1.component';
import { ShowProComponent } from './Admin/product1/show-pro/show-pro.component';
import { AddEditProComponent } from './Admin/product1/add-edit-pro/add-edit-pro.component';

import { LoginComponent } from './View/login/login.component';
import { LoginFormComponent } from './View/login/login-form/login-form.component';
import { RegisFormComponent } from './View/login/regis-form/regis-form.component';
//---------------------------------------category Admin
import { CategoryComponent } from './Admin/category/category.component';
import { AddEditCateComponent } from './Admin/category/add-edit-cate/add-edit-cate.component';
import { ShowCateComponent } from './Admin/category/show-cate/show-cate.component';
//---------------------------------------role Admin
import { RoleComponent } from './Admin/role/role.component';
import { AddEditRolComponent } from './Admin/role/add-edit-rol/add-edit-rol.component';
import { ShowRolComponent } from './Admin/role/show-rol/show-rol.component';
//---------------------------------------custommer Admin
import { CustomerComponent } from './Admin/customer/customer.component';
import { AddEditCusComponent } from './Admin/customer/add-edit-cus/add-edit-cus.component';
import { ShowCusComponent } from './Admin/customer/show-cus/show-cus.component';
//---------------------------------------Order Admin
import { OrderComponent } from './Admin/order/order.component';
import { ShowOrdComponent } from './Admin/order/show-ord/show-ord.component';
import { AddEditOrdComponent } from './Admin/order/add-edit-ord/add-edit-ord.component';
//---------------------------------------phân trang
import {NgxPaginationModule} from 'ngx-pagination';
import { FilterPipe } from './filter.pipe';
//---------------------------------------
import {RouterModule} from '@angular/router'
//---------------------------------------phân login
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { NewComponent } from './Admin/new/new.component';
import { ShowNewComponent } from './Admin/new/show-new/show-new.component';
import { AddEditNewComponent } from './Admin/new/add-edit-new/add-edit-new.component';

import { NewdetailComponent } from './Admin/newdetail/newdetail.component';
import { ShowDetailComponent } from './Admin/newdetail/show-detail/show-detail.component';
import { AddEditDetailComponent } from './Admin/newdetail/add-edit-detail/add-edit-detail.component';

import { BlogComponent } from './View/blog/blog.component';
import { AbcComponent } from './Test/abc/abc.component';
import { OrderdetailComponent } from './Admin/orderdetail/orderdetail.component';
import { ShowOddComponent } from './Admin/orderdetail/show-odd/show-odd.component';
import { AddEditOddComponent } from './Admin/orderdetail/add-edit-odd/add-edit-odd.component';
import { BcdComponent } from './Test/bcd/bcd.component';
import { AdminHeaderComponent } from './header-footer/admin-header/admin-header.component';
//---------------------------------------

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CartComponent,
    CheckOutComponent,
    ContactComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    NewsComponent,
    ProductComponent,
    ProductDetailComponent,
    Product1Component,
    ShowProComponent,
    AddEditProComponent,
    LoginComponent,
    LoginFormComponent,
    RegisFormComponent,
    CategoryComponent,
    AddEditCateComponent,
    ShowCateComponent,
    RoleComponent,
    AddEditRolComponent,
    ShowRolComponent,
    CustomerComponent,
    AddEditCusComponent,
    ShowCusComponent,
    FilterPipe,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    OrderComponent,
    ShowOrdComponent,
    AddEditOrdComponent,
    NewComponent,
    ShowNewComponent,
    AddEditNewComponent,
    NewdetailComponent,
    ShowDetailComponent,
    AddEditDetailComponent,
    BlogComponent,
    AbcComponent,
    OrderdetailComponent,
    ShowOddComponent,
    AddEditOddComponent,
    BcdComponent,
    AdminHeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
