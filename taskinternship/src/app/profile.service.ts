import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  item={
    firstname:'',
    lastname:'',
    email:'',
    number:'',
    city:'',
    pincode:'',
    state:'',
    password:'',
    date:''
  }
  item2={
    email:' ',
    password:' '
  }
  constructor(private http:HttpClient) { }
  newRegisterdata(item:any)
  {   
    return this.http.post("http://localhost:3800/insert",{"Registerdata":item})
    .subscribe(data =>{console.log(data)})
  }
  newusercheck(item2:any){
    return this.http.post<any>("http://localhost:3800/usercheck",{"usercheck":item2})  
  }
  getdata(id:any){
    let httpHeaders = new HttpHeaders({
      "content-Type" : "application/json"
    });
    return this.http.get<any>("http://localhost:3800/data/"+id,{headers:httpHeaders});
  }

}
