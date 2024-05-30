

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { book } from './book';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  


  registration(user:any){
    return this.http.post('http://localhost:4500/users/reg',user,({responseType:'text'}));
  }
  login(user:any){
    return this.http.post('http://localhost:4500/users/login',user,({responseType:'text'}));
  }
  getbook(){
    return this.http.get('http://localhost:4500/books',({responseType:'json'}));
  }

  add(book:any){
    return this.http.post('http://localhost:4500/addbooks',book,({responseType:'text'}));
  }
  delete(b:any){
    let res=b._id;
    return this.http.delete(`http://localhost:4500/delete/${res}`,({responseType:'text'}));
  }
  update(b:any){
    let res=b._id;
    return this.http.put(`http://localhost:4500/update/${res}`,b,({responseType:'text'}));
  }

}


