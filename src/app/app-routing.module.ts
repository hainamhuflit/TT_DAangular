import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './View/cart/cart.component';
import { CheckOutComponent } from './View/check-out/check-out.component';
import { IndexComponent } from './View/index/index.component';
import { AboutComponent } from './View/about/about.component';
import { NewsComponent } from './View/news/news.component';
import { ContactComponent } from './View/contact/contact.component';
import { ProductComponent } from './View/product/product.component';
import { ProductDetailComponent } from './View/product-detail/product-detail.component';
import { Product1Component } from './Admin/product1/product1.component';
import { RegisFormComponent } from './View/login/regis-form/regis-form.component';
import { LoginComponent } from './View/login/login.component';
import { CustomerComponent } from './Admin/customer/customer.component';
import { RoleComponent } from './Admin/role/role.component';
import { CategoryComponent } from './Admin/category/category.component';
import { OrderComponent } from './Admin/order/order.component';
import { NewComponent } from './Admin/new/new.component';
import { NewdetailComponent } from './Admin/newdetail/newdetail.component';

import { BlogComponent } from './View/blog/blog.component';

import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

import { AbcComponent } from './Test/abc/abc.component';
import { OrderdetailComponent } from './Admin/orderdetail/orderdetail.component';
import { BcdComponent } from './Test/bcd/bcd.component';
const routes: Routes = [

{path:'' , redirectTo:'home', pathMatch:'full'},

{path: 'home', component: IndexComponent },
{path: 'about', component: AboutComponent },
{path: 'shop', component: ProductComponent },
{path: 'news', component: NewsComponent},
{path: 'contact', component: ContactComponent},
{path: 'detail/:id', component: ProductDetailComponent},
{path: 'cart', component: CartComponent},
{path: 'checkout', component: CheckOutComponent},
{path:'pro1',component:Product1Component},
{path: 'login', component: LoginComponent},
{path: 'regis',component:RegisFormComponent},
{path: 'custom',component:CustomerComponent},
{path: 'role',component:RoleComponent},
{path: 'catego',component:CategoryComponent},
{path: 'order',component:OrderComponent},
{path: 'new',component:NewComponent},
{path: 'newd',component:NewdetailComponent},
{path: 'blog/:id',component:BlogComponent},
{path: 'abc',component:AbcComponent},
{path: 'bcd',component:BcdComponent},
{path: 'orderdd',component:OrderdetailComponent},
{path: 'in',component:SignInComponent},
{path: 'up',component:SignUpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
