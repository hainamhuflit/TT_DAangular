import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:53535/api";
readonly PhotoUrl = "http://localhost:53535/Photos/";

  constructor(private http:HttpClient,private fb: FormBuilder) { }
  
  getAllProducts() {
    return this.http.get(this.APIUrl+'/product');
  }
  addToCart(payload :any) {
    return this.http.post(this.APIUrl+'/OrderDetail',payload );
  }
  getCartItems() {
    return this.http.get(this.APIUrl+'/orderDetail');
  }
  increaseQty(payload :any) {
    return this.http.post(this.APIUrl+'/OrderDetail', payload );
  }
  deletecard(payload:any){
    return this.http.delete(this.APIUrl+'/OrderDetail/'+payload);
  }
  //OderDetail

  getOddList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/orderdetail');
  }

  addOrderDetail(val:any){
    return this.http.post(this.APIUrl+'/OrderDetail',val);
  }

  updateOrderDetail(val:any){
    return this.http.put(this.APIUrl+'/OrderDetail',val);
  }

  deleteOrderDetail(val:any){
    return this.http.delete(this.APIUrl+'/OrderDetail/'+val);
  }
//------------------------------------------------------------danh sach gio hang pham admin--------------------------

getOrdList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/order');
}

addOrder(val:any){
  return this.http.post(this.APIUrl+'/Order',val);
}

updateOrder(val:any){
  return this.http.put(this.APIUrl+'/Order',val);
}

deleteOrder(val:any){
  return this.http.delete(this.APIUrl+'/Order/'+val);
}
  //------------------------------------------------------------abc--------------------------
  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('ConfirmPassword');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('Password').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      userName: this.formModel.value.userName,
      email: this.formModel.value.email,
      address: this.formModel.value.address,
      phone: this.formModel.value.phone,
      password: this.formModel.value.password.Password,
      roleID: this.formModel.value.password. roleID
    };
    return this.http.post(this.APIUrl + '/Customer', body);
  }

  login(formData) {
    return this.http.post(this.APIUrl + '/Customer', formData);
  }

  getUserProfile() {
    return this.http.get(this.APIUrl + '/Customer');
  }

//--------------------------------------------------------loai tin tuc admin--------------------------
getNewList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/news');
}

addNews(val:any){
  return this.http.post(this.APIUrl+'/news',val);
}

updateNews(val:any){
  return this.http.put(this.APIUrl+'/news',val);
}

deleteNews(val:any){
  return this.http.delete(this.APIUrl+'/news/'+val);
}
//--------------------------------------------------------chi tiet tin tuc admin--------------------------
getNewsDetailList():Observable<any[]>{
  return this.http.get<any>(this.APIUrl+'/newsDetail');
}
addNewsDetail(val:any){
  return this.http.post(this.APIUrl+'/NewsDetail',val);
}

updateNewsDetail(val:any){
  return this.http.put(this.APIUrl+'/NewsDetail',val);
}

deleteNewsDetail(val:any){
  return this.http.delete(this.APIUrl+'/NewsDetail/'+val);
}
//--------------------------------------------------------loai san san pham admin--------------------------
  getCateList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Category');
  }

  addCategory(val:any){
    return this.http.post(this.APIUrl+'/Category',val);
  }

  updateCategory(val:any){
    return this.http.put(this.APIUrl+'/Category',val);
  }


  deleteCategory(val:any){
    return this.http.delete(this.APIUrl+'/Category/'+val);
  }
  
//------------------------------------------------------------danh sach customer admin--------------------------
  getCusList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/customer');
  }

  addCustomer(val:any){
    return this.http.post(this.APIUrl+'/Customer',val);
  }

  updateCustomer(val:any){
    return this.http.put(this.APIUrl+'/Customer',val);
  }

  deleteCustomer(val:any){
    return this.http.delete(this.APIUrl+'/Customer/'+val);
  }
//------------------------------------------------------------phan quyen admin --------------------------
  getRolList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/role');
  }

  addRole(val:any){
    return this.http.post(this.APIUrl+'/Role',val);
  }

  updateRole(val:any){
    return this.http.put(this.APIUrl+'/Role',val);
  }

  deleteRole(val:any){
    return this.http.delete(this.APIUrl+'/Role/'+val);
  }
  //------------------------------------------------------------ Chi tiet san pham--------------------------
  getByID(id):Observable<any>{
    const url = `${this.APIUrl}/product/${id}`;
    return this.http.get(url).pipe()
  }
  getBynewID(id):Observable<any>{
    const url = `${this.APIUrl}/newsdetail/${id}`;
    return this.http.get(url).pipe()
  }
  //------------------------------------------------------------danh sach san pham admin--------------------------
  getProList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/product');
  }

  addProduct(val:any){
    return this.http.post(this.APIUrl+'/Product',val);
  }

  updateProduct(val:any){
    return this.http.put(this.APIUrl+'/Product',val);
  }

  deleteProduct(val:any){
    return this.http.delete(this.APIUrl+'/Product/'+val);
  }

  //------------------------------------------------------------
  getDepList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.APIUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APIUrl+'/Department',val);
  }

  deleteDepartment(val:any){
    return this.http.delete(this.APIUrl+'/Department/'+val);
  }

//------------------------------------------------------------
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Employee');
  }

  addEmployee(val:any){
    return this.http.post(this.APIUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APIUrl+'/Employee',val);
  }

  deleteEmployee(val:any){
    return this.http.delete(this.APIUrl+'/Employee/'+val);
  }


  UploadPhoto(val:any){
    return this.http.post(this.APIUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Employee/GetAllDepartmentNames');
  }

}
